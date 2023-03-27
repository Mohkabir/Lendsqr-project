import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CaretDown,
  LogoIcon,
  MenuIcon,
  NotificationIcon,
  SearchIcon,
} from "../icons";
import "./Header.scss";

const Header = () => {
  const [isMenu, setIsMenu] = useState<boolean>(false);

  return (
    <div className="header">
      <div className="logo">
        <Link to="/users">
          <LogoIcon />
        </Link>
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
      <div className="menuBar">
        <span onClick={() => setIsMenu(true)}>
          <MenuIcon />
        </span>
      </div>

      {isMenu && (
        <div className="mobileNav">
          <p>
            <button type="button" onClick={() => setIsMenu(false)}>
              x
            </button>
          </p>
          <li>Adedeji</li>
          <li>
            <button type="button">Log Out</button>
          </li>
        </div>
      )}
    </div>
  );
};

export default Header;
