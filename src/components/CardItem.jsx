import iconCheck from "../assets/images/tabler-check.svg";
import iconEdit from "../assets/images/todo-item-edit-button.svg";
import iconDelete from "../assets/images/activity-item-delete-button.svg";
import { useState } from "react";
import axios from "axios";
import priorityList from "../List";
import ModalLayout from "./ModalLayout";
import ModalAddItem from "./ModalAddItem";
import ModalDeleteActivity from "../components/ModalDeleteActivity";

export default function CardItem({ item, onDelete, onUpdate }) {
  const [active, setActive] = useState(item.is_active === 1 ? true : false);
  const [isEditItem, setIsEditItem] = useState(false);
  const [showDeleteItemModal, setShowDeleteItemModal] = useState(false);

  function handleCheckBox(ev) {
    const { checked } = ev.target;
    axios.patch("/todo-items/" + item.id, {
      is_active: checked ? 0 : 1,
    });
    setActive(!checked);
  }

  function handleUpdateName(name, selected) {
    axios
      .patch("/todo-items/" + item.id, {
        title: name,
        priority: selected,
      })
      .then(() => onUpdate(item.activity_group_id));
    setIsEditItem(false);
  }

  return (
    <div className="w-full bg-white shadow-custom ps-7 py-6 pe-6 rounded-xl flex items-center justify-between">
      <ModalLayout visible={isEditItem} onClose={() => setIsEditItem(false)}>
        <ModalAddItem
          initialValue={item}
          onClose={() => setIsEditItem(false)}
          onSave={handleUpdateName}
        />
      </ModalLayout>
      <ModalLayout
        visible={showDeleteItemModal}
        onClose={() => setShowDeleteItemModal(false)}
      >
        <ModalDeleteActivity
          activity={item}
          onClose={() => setShowDeleteItemModal(false)}
          onDelete={onDelete}
        />
      </ModalLayout>
      <div className="flex items-center">
        <label htmlFor={item.id} className="h-5 w-5 relative me-6">
          <input
            className="w-full h-full z-10 appearance-none border border-grayC7C7C7 checked:bg-primary checked:border-none"
            type="checkbox"
            onChange={handleCheckBox}
            checked={!active}
            id={item.id}
          />
          <img className="absolute left-1 top-1" src={iconCheck} alt="" />
        </label>
        <div
          className={
            "w-2 h-2 rounded-full me-4 " +
            priorityList.find((priority) => priority.value === item.priority)
              .color
          }
        ></div>
        <p className={"cursor-text font-poppins-medium text-lg me-4 " + (active ? "" : "text-gray888888 line-through")}>
          {item.title}
        </p>
        <img
          className="cursor-pointer"
          src={iconEdit}
          onClick={() => setIsEditItem(true)}
        />
      </div>
      <button
        onClick={(ev) => {
          setShowDeleteItemModal(true);
        }}
      >
        <img src={iconDelete} alt="" />
      </button>
    </div>
  );
}
