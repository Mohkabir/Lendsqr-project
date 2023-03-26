import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ActionIcon } from "../icons";

const UserRow = (props: any) => {
  const [current, setCurrent] = useState();

  const {
    idx,
    user: { orgName, createdAt, userName, email, phoneNumber, status, id },
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
              <Link to={`/users/${id}`}>View Details</Link>
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
