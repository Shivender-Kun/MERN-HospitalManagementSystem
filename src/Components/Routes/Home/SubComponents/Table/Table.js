import React from "react";
import statusBtn from "./statusBtn";
function table(users, signedUser, userType) {
  try {
    let names, status, description;

    if (users.length > 0) {
      names = users.map((user) => user.name);
      status = users.map((user) => user.status);
      description = users.map((user) => user.description);

      const list = [];
      for (let i = 0; i < users.length; i++) {
        list.push(
          <tr key={i}>
            <td>{names[i]}</td>
            <td>
              {signedUser !== "admin" || status[i] === "Not Applied"
                ? status[i]
                : statusBtn(users[i], userType)}
            </td>
            <td>{description[i]}</td>
          </tr>
        );
      }
      return list.length > 0 && list;
    }
  } catch (error) {
    console.log(error.message);
  }
}

export default table;
