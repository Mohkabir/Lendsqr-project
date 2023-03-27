import React, { useContext, useEffect, useState } from "react";
import { IUser, UserContext, UserContextType } from "../../globalState";
import Cards from "./Cards";
import Pagination from "./Pagination";
import "./Users.scss";
import UsersTable, { FilterPayload } from "./UsersTable";

const UsersContents = () => {
  const { loading, users, getUsers, usersOverview } = useContext(
    UserContext
  ) as UserContextType;

  const [filterUsers, setfilterUsers] = useState<IUser[]>(users);

  useEffect(() => {
    if (!users.length) {
      getUsers();
    }
  }, []);

  useEffect(() => {
    setfilterUsers(users);
  }, [users]);

  const [postPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastPage = currentPage * postPerPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;
  const currentTemplate = filterUsers?.slice(indexOfFirstPage, indexOfLastPage);
  const numberOfPages = Math.ceil(filterUsers?.length / postPerPage);

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

  const filterSearch = (val: any) => {

    let filtered: any[] = [];
    users.forEach((user) => {
      if (user.status.toLowerCase().includes(val.status)) {
        filtered.push(user);
      }
      // if (user.orgName.toLowerCase().includes(val.org)) {
      //   filtered.push(user);
      // }

      // if (
      //   user.userName.toLowerCase().includes(val?.username) ||
      //   user.orgName.toLowerCase().includes(val.org) ||
      //   user.email.toLowerCase().includes(val.email) ||
      //   user.phoneNumber.toLowerCase().includes(val.phone) ||
      //   user.orgName.toLowerCase().includes(val.org) ||
      //   user.status.toLowerCase().includes(val.status)
      // ) {
      //   filtered.push(user);
      //   filtered.push(user);
      // }
    });
    setfilterUsers(filtered);
  };

  const handleFilter = (val: any) => {
    filterSearch(val);
  };

  const handleReset = () => {
    setfilterUsers(users);
  };
  return (
    <div className="users">
      <h3>Users</h3>
      <Cards usersOverview={usersOverview} loading={loading} />
      <UsersTable
        filterUsers={currentTemplate}
        loading={loading}
        users={users}
        handleReset={handleReset}
        handleFilter={(val) => handleFilter(val)}
      />
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
