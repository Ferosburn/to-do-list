import check from "../assets/images/sort-check.svg";

export default function ItemSort({ selected, sort, onSelected, element }) {
  return (
    <div
      className="cursor-pointer w-full px-5 py-3.5 flex items-center justify-between"
      onClick={() => onSelected(sort.value)}
      data-cy="sort-selection-item"
      element={element}
    >
      <div className="flex gap-4 items-center">
        <img src={sort.icon} alt="" />
        <p className="font-poppins-regular text-base">{sort.name}</p>
      </div>
      {selected === sort.value && <img src={check} alt="" />}
    </div>
  );
}
