import iconInfo from "../assets/images/modal-information-icon.svg";

export default function ModalActivityInfo({ isActivity }) {
  return (
    <div className="w-112 bg-white rounded-xl px-7 py-4 flex flex-row items-center">
      <img src={iconInfo} className="mr-2.5" alt="" />
      <p className="font-poppins-medium text-sm text-black">
        {isActivity ? "Activity" : "Item"} berhasil dihapus
      </p>
    </div>
  );
}
