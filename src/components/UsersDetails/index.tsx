import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BackIcon } from "../icons";
import OtherUserInfo from "./OtherUserInfo";
import ProfileCard from "./ProfileCard";
import "./UserDetails.scss";

interface TabSwitch {
  tab: number;
  setTab: Function;
}

const UserDetails = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState<TabSwitch>();
  return (
    <div className="userDetails">
      <div className="back">
        <button type="button" onClick={() => navigate(-1)}>
          <BackIcon /> Back to Users
        </button>
      </div>
      <div className="pageHead">
        <h3>User Details</h3>
        <div>
          <button type="button">Blacklist User</button>
          <button type="button">Activate User</button>
        </div>
      </div>
      <ProfileCard />
      <OtherUserInfo />
    </div>
  );
};

export default UserDetails;
