import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IUser, UserContext, UserContextType } from "../../globalState";
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
  const location = useLocation();

  const [tab, setTab] = useState<TabSwitch>();

  const { loading, userDetails, getUser } = useContext(
    UserContext
  ) as UserContextType;

  useEffect(() => {
    getUser(Number(location.pathname.split("/")[2]));
  }, []);

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
      <ProfileCard userDetails={userDetails} loading={loading} />
      <OtherUserInfo userDetails={userDetails} loading={loading} />
    </div>
  );
};

export default UserDetails;
