import check from "../assets/images/sort-check.svg";

export default function ItemPriority({ selected, priority, onSelect }) {
  return (
    <div
      className="w-full ps-4 pe-6 py-3.5 flex flex-row items-center justify-between"
      onClick={() => onSelect(priority.value)}
    >
      <div className="flex flex-row items-center">
        <div
          className={`rounded-full ${priority.color} w-3.5 h-3.5 me-5`}
        ></div>
        <p className="font-poppins-regular text-base">{priority.name}</p>
      </div>
      {selected === priority.value && <img src={check} alt="" />}
    </div>
  );
}
