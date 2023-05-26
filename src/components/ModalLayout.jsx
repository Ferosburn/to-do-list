export default function ModalLayout({ children, visible, onClose }) {
  function closeModal(e) {
    e.stopPropagation();
    if (e.target.id === "container") onClose();
  }

  if (!visible) return null;

  return (
    <div
      data-cy="activity-item-delete-button"
      id="container"
      className="cursor-default z-50 fixed inset-0 bg-black/50 flex justify-center items-center"
      onClick={closeModal}
    >
      {children}
    </div>
  );
}
