import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IUser, UserContext, UserContextType } from "../../globalState";
import {
  CaretDown,
  LogoIcon,
  MenuIcon,
  NotificationIcon,
  ProfileAvatar,
  SearchIcon,
} from "../icons";
import "./Header.scss";

type CurrentUserType = {
  email: string;
  avatar: string;
};
const Header = () => {
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<IUser[]>([]);
  const { users, LogOut, getUsers } = useContext(
    UserContext
  ) as UserContextType;
  const [search, setSearch] = useState("");
  const [openDropDown, setOpenDropDown] = useState<boolean>(false);

  const [user, setUser] = useState<CurrentUserType>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!users.length) {
      getUsers();
    }
  }, [getUsers, users]);

  const filterSearch = (val: string) => {
    let res: any = [];
    users.forEach((user) => {
      if (
        user.userName.toLowerCase().includes(val) ||
        user.orgName.toLowerCase().includes(val) ||
        user.email.toLowerCase().includes(val) ||
        user.phoneNumber.toLowerCase().includes(val) ||
        user.status.toLowerCase().includes(val)
      ) {
        res.push(user);
      }
    });
    setSearchResults(res);
    if (val === "") {
      setSearchResults([]);
    }
  };

  // const getCurrentUser = () => {
  //   let user: string | null = localStorage.getItem("user");
  //   if (user) {
  //     setUser(JSON.parse(user));
  //   } else {
  //     navigate("/");
  //   }
  // };

  useEffect(() => {
    let user: string | null = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    } else {
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = (): void => {
    let res = LogOut();
    if (res === "done") {
      navigate("/");
    }
  };
  return (
    <div className="header">
      <div className="logo">
        <Link to="/users">
          <LogoIcon />
        </Link>
      </div>
      <div className="search">
        <div className="inputGroup">
          <input
            placeholder="Search for anything"
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              filterSearch(e.target.value);
            }}
          />
          <button>
            <SearchIcon />
          </button>
        </div>
        {search.length > 0 && (
          <div className="searchResult">
            {searchResults.map((user) => (
              <Link to={`/users/${user.id}`}>
                <p>
                  <span> Organization: </span>
                  {user.orgName}
                  <span> Username: </span> {user.userName}
                  <span> Email: </span>
                  {user.email}
                  <span> Status: </span> {user.status}
                </p>
              </Link>
            ))}
            {search !== "" && !searchResults.length && <p>Not Found</p>}
          </div>
        )}
      </div>
      <div className="profile">
        <span>Docs</span>
        <NotificationIcon />

        <div className="profile_img">
          {user?.avatar ? <img src={user?.avatar} alt="" /> : <ProfileAvatar />}
        </div>
        <p>
          <span>{user?.email?.split("@")[0]}</span>
          <button onClick={() => setOpenDropDown(!openDropDown)}>
            <CaretDown />
          </button>
          {openDropDown && (
            <div className="dropdown">
              <p onClick={handleLogout}> Log Out</p>
            </div>
          )}
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
          <li>{user?.email?.split("@")[0]}</li>
          <li>
            <button type="button" onClick={handleLogout}>
              Log Out
            </button>
          </li>
        </div>
      )}
    </div>
  );
};

export default Header;
