import check from "../assets/images/sort-check.svg";
import sortLatest from "../assets/images/sort-latest.svg";
import sortOldest from "../assets/images/sort-oldest.svg";
import sortAZ from "../assets/images/sort-az.svg";
import sortZA from "../assets/images/sort-za.svg";
import sortUnfinished from "../assets/images/sort-unfinished.svg";

export default function ItemSort({ selected, sort, onSelected }) {
  return (
    <div
      className="cursor-pointer w-full px-5 py-3.5 flex items-center justify-between"
      onClick={() => onSelected(sort.value)}
    >
      <div className="flex gap-4 items-center">
        <img src={sort.icon} alt="" />
        <p className="font-poppins-regular text-base">{sort.name}</p>
      </div>
      {selected === sort.value && <img src={check} alt="" />}
    </div>
  );
}