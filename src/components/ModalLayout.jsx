export default function ModalLayout({ children, visible, onClose, modalFor }) {
  function closeModal(e) {
    e.stopPropagation();
    if (e.target.id === "container") onClose();
  }

  let dataCy = "";
  switch (modalFor) {
    case "delete-activity-item":
      dataCy = "modal-delete";
      break;
    case "activity-info":
      dataCy = "modal-information";
      break;
    // case "delete-todo-item":
    //   dataCy = "todo-item-delete-button";
    //   break;
    default:
      break;
  }

  if (!visible) return null;

  return (
    <div
      data-cy={dataCy}
      id="container"
      className="cursor-default z-50 fixed inset-0 bg-black/50 flex justify-center items-center"
      onClick={closeModal}
    >
      {children}
    </div>
  );
}
