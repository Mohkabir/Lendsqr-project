import React from "react";
import { ProfileAvatar, RatingFill, RatingIcon } from "../icons";

const ProfileCard = () => {
  const setTab = (val: any) => {};
  return (
    <div className="profileCard">
      <div className="profileData">
        <div>
          <span>
            <ProfileAvatar />
          </span>
          <div>
            <h3>Grace Effiom</h3>
            <p>LSQFf587g90</p>
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
          <h3>₦200,000.00</h3>
          <p>9912345678/Providus Bank</p>
        </div>
      </div>
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
    </div>
  );
};

export default ProfileCard;
