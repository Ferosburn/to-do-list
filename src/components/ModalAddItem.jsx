import { useState } from "react";
import closeBtn from "../assets/images/modal-add-close-button.svg";
import chevronDown from "../assets/images/tabler-chevron-down.svg";
import ItemPriority from "./ItemPriority";
import { priorityList } from "../List";

export default function ModalAddItem({ initialValue, onClose, onSave, isAdd }) {
  const [selected, setSelected] = useState(
    initialValue?.priority || "very-high"
  );
  const [showOptions, setShowOptions] = useState(false);
  const [name, setName] = useState(initialValue?.title || "");
  let [string1, string2] = ["", ""];

  if (isAdd) {
    [string1, string2] = ["Tambah", "Tambahkan"];
  } else {
    [string1, string2] = ["Ubah", "Ubah"];
  }

  function handleSelect(value) {
    setSelected(value);
    setShowOptions(false);
  }

  return (
    <div className="w-[830px] bg-white rounded-xl divide-y divide-grayE5E5E5">
      <div className="ps-[30px] pt-[24px] pe-[41px] pb-[19px] flex flex-row justify-between">
        <p className="font-poppins-semibold text-lg">{string1} List Item</p>
        <button onClick={onClose}>
          <img src={closeBtn} alt="" />
        </button>
      </div>
      <div className="ps-[30px] pt-[38px] pe-[41px] pb-[23px]">
        <p className="font-poppins-semibold text-xs mb-[9px]">NAMA LIST ITEM</p>
        <input
          className="px-[18px] py-[14px] rounded-md w-full mb-[26px] border border-grayE5E5E5 outline-none focus:border-primary"
          type="text"
          placeholder={string2 + " nama list item"}
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        />
        <p className="font-poppins-semibold text-xs mb-[9px]">PRIORITY</p>
        {/* dropdown-button-start */}
        <button
          className={
            "w-[205px] px-[17px] py-[14px] border border-grayE5E5E5 flex flex-row items-center justify-between " +
            (showOptions ? "rounded-t-md bg-grayF4F4F4" : "rounded-md")
          }
          onClick={() => setShowOptions(!showOptions)}
        >
          {showOptions ? (
            <>
              <div className="flex flex-row items-center">
                <p className="font-poppins-regular text-base">Pilih priority</p>
              </div>
              <img className="rotate-180" src={chevronDown} />
            </>
          ) : (
            <>
              <div className="flex flex-row items-center">
                <div
                  className={
                    "rounded-full w-[14px] h-[14px] me-[19px] " +
                    priorityList.find(({ value }) => value === selected).color
                  }
                ></div>
                <p className="font-poppins-regular text-base">
                  {priorityList.find(({ value }) => value === selected).name}
                </p>
              </div>
              <img src={chevronDown} alt="" />
            </>
          )}
        </button>
        {/* dropdown-button-end */}
        {/* dropdown-menu-start */}
        {showOptions && (
          <div className="absolute w-[205px] bg-white rounded-b-md border-x border-b border-grayE5E5E5 divide-y divide-grayE5E5E5">
            {priorityList.map((item) => (
              <ItemPriority
                key={item.value}
                priority={item}
                selected={selected}
                onSelect={handleSelect}
              />
            ))}
          </div>
        )}
        {/* dropdown-menu-end */}
      </div>
      <div className="ps-[30px] pt-[15px] pe-[40px] pb-[19px] flex justify-end">
        <button
          className={
            "w-[150px] py-[13.5px] text-white text-center rounded-[45px] font-poppins-semibold " +
            (name === "" ? "bg-primary/[0.2]" : "bg-primary")
          }
          disabled={name === ""}
          onClick={() => {
            onSave(name, selected);
            onClose();
          }}
        >
          Simpan
        </button>
      </div>
    </div>
  );
}
