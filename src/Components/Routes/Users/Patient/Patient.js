import React from "react";
import User from "../User";
import { Appointment } from "../../Routes";

export default function Patient() {
  return (
    <div>
      <User />
      <Appointment />
    </div>
  );
}
