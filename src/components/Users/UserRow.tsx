import React from "react";
import { ActionIcon } from "../icons";

interface User {
  createdAt?: string;
  orgName?: string;
  userName?: string;
  email?: string;
  phoneNumber?: string;
  status?: string;
}

const UserRow = (props: any) => {
  console.log(props, "props");

  const { orgName, createdAt, userName, email, phoneNumber, status } =
    props.user;

  return (
    <div className="row">
      <p>{orgName}</p>
      <p>{userName}</p>
      <p>{email}</p>
      <p>{phoneNumber}</p>
      <p>{createdAt}</p>
      <p>
        <span
          className={`${status === "Pending" && "pending"} ${
            status === "Blacklisted" && "blacklist"
          } ${status === "Inactive" && "inactive"}`}
        >
          {status}
        </span>
        <ActionIcon />
      </p>
    </div>
  );
};

export default UserRow;
