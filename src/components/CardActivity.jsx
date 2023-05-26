import iconDelete from "../assets/images/activity-item-delete-button.svg";
import { Navigate } from "react-router-dom";
import ModalLayout from "./ModalLayout";
import { useState } from "react";
import ModalDeleteActivity from "./ModalDeleteActivity";

export default function CardActivity({ activity, handleDelete }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const date = new Date(activity.created_at);
  function handleDeleteModalClose() {
    setShowDeleteModal(false);
  }

  if (redirect) {
    return <Navigate to={"/activities/" + activity.id} />;
  }

  return (
    <div
      onClick={(e) => {
        if (e.currentTarget.className.includes("card")) setRedirect(true);
      }}
      className="card cursor-pointer flex-initial h-60 p-6 bg-white shadow-custom rounded-xl flex flex-col justify-between"
    >
      <ModalLayout visible={showDeleteModal} onClose={handleDeleteModalClose}>
        <ModalDeleteActivity
          activity={activity}
          onDelete={handleDelete}
          onClose={handleDeleteModalClose}
          isActivity={true}
        />
      </ModalLayout>
      <p className="font-poppins-bold text-lg">{activity.title}</p>
      <div className="flex items-center justify-between">
        <p className="font-poppins-medium text-sm text-gray888888">
          {date.toLocaleDateString("id-ID", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <button
          id="button-delete"
          className="z-10"
          onClick={(ev) => {
            ev.stopPropagation();
            setShowDeleteModal(true);
          }}
        >
          <img src={iconDelete} alt="" />
        </button>
      </div>
    </div>
  );
}