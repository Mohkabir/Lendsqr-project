import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ActionIcon,
  ActivateIcon,
  ActiveUsers,
  BlacklistIcon,
  ViewIcon,
} from "../icons";

const UserRow = (props: any) => {
  const [current, setCurrent] = useState(null);

  const {
    idx,
    user: { orgName, createdAt, userName, email, phoneNumber, status, id },
  } = props;
  console.log(current, "current");

  return (
    <div className="row">
      {/* <p className="tool_tip">
        <span className="text">{orgName}</span> <span className="tool_tiptext">{orgName}</span>
      </p> */}

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
          <button
            type="button"
            onClick={() => {
              setCurrent(current === null ? idx : null);
            }}
          >
            <ActionIcon />
          </button>
          {current === idx && (
            <div className={`options open`}>
              <button>
                <Link to={`/users/${id}`}>
                  <ViewIcon /> View Details
                </Link>
              </button>
              <button>
                <span>
                  <BlacklistIcon /> Blacklist User
                </span>
              </button>
              <button>
                <span>
                  <ActivateIcon /> Activate User
                </span>
              </button>
            </div>
          )}
        </div>
      </p>
    </div>
  );
};

export default UserRow;
