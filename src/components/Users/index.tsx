import React, { useContext, useEffect, useState } from "react";
import { UserContext, UserContextType } from "../../globalState";
import Cards from "./Cards";
import Pagination from "./Pagination";
import "./Users.scss";
import UsersTable from "./UsersTable";

const UsersContents = () => {
  const { loading, users, getUsers } = useContext(
    UserContext
  ) as UserContextType;

  useEffect(() => {
    getUsers();
  }, []);

  const [postPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastPage = currentPage * postPerPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;
  const currentTemplate = users?.slice(indexOfFirstPage, indexOfLastPage);
  const numberOfPages = Math.ceil(users?.length / postPerPage);

  const previous = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else {
      alert("last page");
    }
  };
  const next = () => {
    if (currentPage < numberOfPages) {
      setCurrentPage(currentPage + 1);
    } else {
      alert("last page");
    }
  };

  return (
    <div className="users">
      <h3>Users</h3>
      <Cards />
      <UsersTable users={currentTemplate} loading={loading} />
      <Pagination
        currentPage={currentPage}
        numberOfPages={numberOfPages}
        next={next}
        previous={previous}
        setPage={(val) => setCurrentPage(val)}
      />
    </div>
  );
};

export default UsersContents;
