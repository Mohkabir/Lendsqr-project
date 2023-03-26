import React from "react";
import Cards from "./Cards";
import Pagination from "./Pagination";
import "./Users.scss";
import UsersTable from "./UsersTable";
const UsersContents = () => {
  return (
    <div className="users">
      <h3>Users</h3>
      <Cards />
      <UsersTable />
      <Pagination />
    </div>
  );
};

export default UsersContents;
