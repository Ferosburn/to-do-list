import axios from "axios";
import { useEffect, useState } from "react";
import iconAdd from "../assets/images/tabler-plus.svg";
import emptyActivityImage from "../assets/images/activity-empty-state.svg";
import CardActivity from "../components/CardActivity";
import ModalLayout from "../components/ModalLayout";
import ModalActivityInfo from "../components/ModalActivityInfo";

export default function IndexPage() {
  const [activities, setActivities] = useState([]);
  const [showInfoModal, setShowInfoModal] = useState(false);

  useEffect(() => {
    axios
      .get("/activity-groups?email=" + import.meta.env.VITE_EMAIL)
      .then((response) => {
        setActivities(response.data.data);
      });
  }, []);

  function deleteActivity(activityId) {
    axios.delete("/activity-groups/" + activityId);
    setActivities([
      ...activities.filter((activity) => activity.id !== activityId),
    ]);
    setShowInfoModal(true);
  }

  function addActivity() {
    axios
      .post("/activity-groups", {
        title: "New Activity",
        email: "udi.khoirul@gmail.com",
      })
      .then(() => {
        axios
          .get("/activity-groups?email=" + import.meta.env.VITE_EMAIL)
          .then((response) => {
            setActivities(response.data.data);
          });
      });
  }

  function handleInfoModalClose() {
    setShowInfoModal(false);
  }

  return (
    <div>
      <ModalLayout visible={showInfoModal} onClose={handleInfoModalClose}>
        <ModalActivityInfo />
      </ModalLayout>
      <div className="flex items-center justify-between mb-12">
        <h2 className="font-poppins-bold text-4xl">Activity</h2>
        <button
          className="py-3.5 ps-5 pe-7 bg-primary text-white text-lg rounded-full font-poppins-semibold flex items-center"
          onClick={addActivity}
        >
          <img src={iconAdd} alt="" className="mr-1.5" />
          <p>Tambah</p>
        </button>
      </div>
      {activities.length > 0 && (
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {activities.map((activity) => (
            <CardActivity
              key={activity.id}
              activity={activity}
              handleDelete={deleteActivity}
            />
          ))}
        </div>
      )}
      {activities.length === 0 && (
        <img src={emptyActivityImage} className="mt-15 h-112 w-192 mx-auto" />
      )}
    </div>
  );
}
