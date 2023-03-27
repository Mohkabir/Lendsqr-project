import React, { useState } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

import {
  ActionIcon,
  ActivateIcon,
  ActiveUsers,
  BlacklistIcon,
  FilterIcon,
  ViewIcon,
} from "../icons";
import { IUser } from "../../globalState";

type UserType = {
  orgName: string;
  createdAt: string;
  userName: string;
  email: string;
  phoneNumber: string;
  status: string;
  id: string;
};

type RowProps = {
  openFilter: () => void;
  idx: number;
  user: IUser;
};

const UserRow = ({ user, idx, openFilter }: RowProps) => {
  const [current, setCurrent] = useState<number | null>(null);

  const { orgName, createdAt, userName, email, phoneNumber, id } = user;

  const status = "pending";

  const formatNumber = (val: string): any => {
    val = val.split("x")[0];
    return val.replace(/[-\s?\.\(\)]/g, "");
  };

  return (
    <>
      <div className="row">
        {/* <p className="tool_tip">
        <span className="text">{orgName}</span> <span className="tool_tiptext">{orgName}</span>
      </p> */}

        <p>{orgName}</p>
        <p>{userName}</p>
        <p>{email}</p>
        <p>{formatNumber(phoneNumber)}</p>
        <p> {dayjs(createdAt).format("MMM D, YYYY h:mm A")}</p>
        <p>
          <span
          // className={`${status === "Pending" && "pending"} ${
          //   status === "Blacklisted" && "blacklist"
          // } ${status === "Inactive" && "inactive"}`}
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

      <div className="mobileRow">
        <div className="head">
          <button type="button" onClick={openFilter}>
            <FilterIcon />
          </button>
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
        </div>
        <div>
          <p>organization</p> <p>{orgName}</p>
        </div>
        <div>
          <p>username</p>
          <p>{userName}</p>
        </div>
        <div>
          <p>email</p>
          <p>{email}</p>
        </div>
        <div>
          <p>phone Number</p>
          <p>{formatNumber(phoneNumber)}</p>
        </div>
        <div>
          <p>Date joined</p>
          <p>{dayjs(createdAt).format("MMM D, YYYY h:mm A")}</p>
        </div>
        <div>
          <p>status</p>
        </div>
      </div>
    </>
  );
};

export default UserRow;
