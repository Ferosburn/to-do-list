import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import emptyTodoImage from "../assets/images/todo-empty-state.svg";
import iconBack from "../assets/images/todo-back-button.svg";
import iconEdit from "../assets/images/todo-title-edit-button.svg";
import iconAdd from "../assets/images/tabler-plus.svg";
import iconSort from "../assets/images/tabler-arrows-sort.svg";
import CardItem from "../components/CardItem";
import ModalLayout from "../components/ModalLayout";
import ModalAddItem from "../components/ModalAddItem";
import ItemSort from "../components/ItemSort";
import { sort } from "fast-sort";
import sortList from "../List"

export default function ActivityPage() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [todoItems, setTodoItems] = useState([]);
  const [TitleInputActive, setTitleInputActive] = useState("hidden");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [sortSelected, setSortSelected] = useState("latest");

  useEffect(() => {
    getTodo(id);
  }, [id]);

  useEffect(() => {
    switch (sortSelected) {
      case "latest":
        setTodoItems(sort(todoItems).desc([(key) => key.id]));
        break;
      case "oldest":
        setTodoItems(sort(todoItems).asc([(key) => key.id]));
        break;
      case "az":
        setTodoItems(sort(todoItems).asc([(key) => key.title]));
        break;
      case "za":
        setTodoItems(sort(todoItems).desc([(key) => key.title]));
        break;
      case "unfinished":
        setTodoItems(sort(todoItems).desc([(key) => key.is_active]));
        break;
      default:
        setTodoItems(sort(todoItems).desc([(key) => key.id]));
        break;
    }
  }, [sortSelected]);

  function handleTitleInput(ev) {
    setTitleInputActive("hidden");
    axios.patch("/activity-groups/" + id, {
      title,
    });
    setTitle(ev.target.value);
  }

  function getTodo(id) {
    axios.get("/activity-groups/" + id).then((response) => {
      setTitle(response.data.title);
      setTodoItems(response.data.todo_items);
    });
  }

  function deleteTodo(id) {
    setTodoItems(todoItems.filter((item) => item.id !== id));
    axios.delete("/todo-items/" + id);
  }

  function addTodo(name, selected) {
    axios
      .post("/todo-items", {
        activity_group_id: id,
        title: name,
        priority: selected,
      })
      .then(() => getTodo(id));
  }

  return (
    <div>
      <ModalLayout
        visible={showCreateModal}
        onClose={() => setShowCreateModal(false)}
      >
        <ModalAddItem
          onClose={() => setShowCreateModal(false)}
          onSave={addTodo}
          isAdd={true}
        />
      </ModalLayout>
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center grow">
          <Link to={".."}>
            <img src={iconBack} alt="" />
          </Link>
          <label
            className="font-poppins-bold text-4xl flex items-center ms-5"
            onClick={() => setTitleInputActive("")}
          >
            <h2 className={"cursor-text " + (!TitleInputActive && "hidden")}>
              {title}
            </h2>
            <input
              className={
                "w-10/12 bg-transparent outline-none p-0 " + TitleInputActive
              }
              type="text"
              value={title}
              onChange={(ev) => setTitle(ev.target.value)}
              onBlur={(ev) => {
                handleTitleInput(ev);
              }}
              onKeyUp={(ev) => {
                if (ev.key === "Enter") {
                  handleTitleInput(ev);
                }
              }}
            />
            <img className="cursor-pointer ms-6 me-5" src={iconEdit} />
          </label>
        </div>
        <div className="flex items-center">
          <div>
            <button
              className="h-14 w-14 border border-grayE5E5E5 rounded-full flex items-center justify-center me-5"
              onClick={() => setShowSort(!showSort)}
            >
              <img src={iconSort} alt="" />
            </button>
            {showSort && (
              <div className="absolute bg-white w-60 mt-1 border border-grayE5E5E5 rounded-md divide-y">
                {sortList.map((item) => (
                  <ItemSort
                    key={item.value}
                    sort={item}
                    selected={sortSelected}
                    onSelected={setSortSelected}
                  />
                ))}
              </div>
            )}
          </div>
          <button
            className="min-w-[150px] py-4 ps-6 pe-7 bg-primary text-white text-lg rounded-full font-poppins-semibold flex items-center"
            onClick={() => setShowCreateModal(true)}
          >
            <img src={iconAdd} alt="" className="mr-1.5" />
            <p>Tambah</p>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2 pb-11">
        {todoItems.length > 0 &&
          todoItems.map((todo) => (
            <CardItem
              key={todo.id}
              item={todo}
              onDelete={deleteTodo}
              onUpdate={getTodo}
            />
          ))}
        {todoItems.length === 0 && (
          <img className="mt-24 h-104 w-136 mx-auto" src={emptyTodoImage} />
        )}
      </div>
    </div>
  );
}
