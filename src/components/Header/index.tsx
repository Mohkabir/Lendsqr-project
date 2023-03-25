import React from "react";
import { CaretDown, LogoIcon, NotificationIcon, SearchIcon } from "../icons";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <LogoIcon />
      </div>
      <div className="search">
        <div className="inputGroup">
          <input placeholder="Search for anything" type="text" />
          <button>
            <SearchIcon />
          </button>
        </div>
      </div>
      <div className="profile">
        <span>Docs</span>
        <NotificationIcon />

        <div className="profile_img"></div>
        <p>
          Adedeji <CaretDown />
        </p>
      </div>
    </div>
  );
};

export default Header;
