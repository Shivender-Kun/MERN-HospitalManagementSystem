import React from "react";
import { useSelector } from "react-redux";
import femaledoc from "../../../../assets/doctor/female.png";
import maledoc from "../../../../assets/doctor/male.png";
import femalepat from "../../../../assets/patient/female.png";
import malepat from "../../../../assets/patient/male.png";

function UserCard() {
  const user = useSelector((state) => state.signInReducer.userData);
  const userType = useSelector((state) => state.signInReducer.userSignedIn);

  return (
    <div>
      {user && (
        <div
          className=" bg-primary text-white"
          style={{ maxWidth: "fit-content" }}
        >
          <img
            src={
              user.gender === "Male"
                ? userType === "doctor"
                  ? maledoc
                  : malepat
                : userType === "patient"
                ? femalepat
                : femaledoc
            }
            style={{ width: "50%" }}
            alt="Doctor"
          />
          <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
            <p className="class-text">Age: {user.age}</p>
            <p className="class-text">Address: {user.address}</p>
            <p className="class-text">Status: {user.status}</p>
            <p className="class-text">Date Applied: {user.applied}</p>
            <p className="class-text list-group-flush">
              Details : {user.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserCard;
