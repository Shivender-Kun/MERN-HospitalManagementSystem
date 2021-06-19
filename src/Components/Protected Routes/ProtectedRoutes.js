import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { AdminUser, DoctorUser, PatientUser, Home } from "../Routes/Routes";

function ProtectedRoutes() {
  const [component, setcomp] = useState(undefined);

  const user = useSelector((state) => state.signInReducer.userSignedIn);

  useEffect(() => {
    function changeRoute() {
      let route;
      if (user === "admin") {
        route = <AdminUser />;
      } else if (user === "patient") {
        route = <PatientUser />;
      } else if (user === "doctor") {
        route = <DoctorUser />;
      }
      setcomp(route);
    }
    changeRoute();
  }, [user]);

  return (
    <>
      {component !== undefined && (
        <Route path="/myaccount" render={() => component} />
      )}
    </>
  );
}

export default ProtectedRoutes;
