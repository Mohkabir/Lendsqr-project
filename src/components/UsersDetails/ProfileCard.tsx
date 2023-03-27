import React from "react";
import { IUser } from "../../globalState";
import { ProfileAvatar, RatingFill, RatingIcon } from "../icons";
import loader from "../../assets/images/load-loading.gif";

type User = {
  userDetails: IUser | null;
  loading: boolean;
};

const ProfileCard = ({ userDetails, loading }: User) => {
  const setTab = (val: any) => {};

  return (
    <div className="profileCard">
      {loading && (
        <div className="loading">
          <img src={loader} alt="" />
        </div>
      )}

      {!loading && (
        <div className="profileData">
          <div>
            <span className="avatar">
              {userDetails?.profile?.avatar ? (
                <img src={userDetails?.profile?.avatar} alt="" />
              ) : (
                <ProfileAvatar />
              )}
            </span>
            <div>
              <h3>{userDetails?.profile?.firstName}</h3>
              <p>{userDetails?.profile?.lastName}</p>
            </div>
          </div>
          <div>
            <p>User’s Tier</p>
            <div className="ratings">
              <RatingFill />
              <RatingIcon />
              <RatingIcon />
            </div>
          </div>
          <div>
            <h3>₦{userDetails?.accountBalance}</h3>
            <p>{userDetails?.accountNumber}</p>
          </div>
        </div>
      )}

      <div className="userDetailsNav">
        <ul>
          <li className="active" onClick={() => setTab(1)}>
            General Details
          </li>
          <li onClick={() => setTab(1)}>Documents</li>
          <li>Bank Details</li>
          <li className="active" onClick={() => setTab(1)}>
            Loans
          </li>
          <li onClick={() => setTab(1)}>Savings</li>
          <li onClick={() => setTab(1)}>App and System</li>
        </ul>
      </div>

      {/* load-loading.gif */}
    </div>
  );
};

export default ProfileCard;
