import alertIcon from "../assets/images/modal-delete-icon.svg";

export default function ModalDeleteActivity({
  activity,
  onDelete,
  onClose,
  isActivity,
}) {
  return (
    <div className="max-w-md cursor-default bg-white rounded-xl pt-10 pb-11 px-15 flex flex-col items-center text-center">
      <img src={alertIcon} alt="" className="h-20 w-20 mb-8" />
      <p className="text-lg font-poppins-medium mb-12">
        Apakah anda yakin menghapus {isActivity ? "activity" : "List Item"}{" "}
        <br /> <span className="font-poppins-bold">{activity.title}?</span>
      </p>
      <div>
        <button
          data-cy="modal-delete-cancel-button"
          className="w-36 py-4 bg-grayF4F4F4 text-gray4A4A4A text-center rounded-full font-poppins-semibold mr-5"
          onClick={() => onClose()}
        >
          Batal
        </button>
        <button
          data-cy="activity-item-delete-button"
          className="w-36 py-4 bg-alert text-white text-center rounded-full font-poppins-semibold"
          onClick={() => {
            onDelete(activity.id);
            onClose();
          }}
        >
          Hapus
        </button>
      </div>
    </div>
  );
}
