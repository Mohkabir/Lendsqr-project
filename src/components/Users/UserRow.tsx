import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  const [current, setCurrent] = useState();

  const {
    idx,
    user: { orgName, createdAt, userName, email, phoneNumber, status },
  } = props;

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
        <div className="actions">
          <button type="button" onClick={() => setCurrent(idx)}>
            <ActionIcon />
          </button>

          <div className={`options ${current && "open"}`}>
            <button>
              <Link to="/users/4">View Details</Link>
            </button>
            <button>Blacklist User</button>
            <button>Activate User</button>
          </div>
        </div>
      </p>
    </div>
  );
};

export default UserRow;
