import React, { FC } from "react";
import { IUser } from "../../globalState";
import TableHead from "./TableHead";
import UserRow from "./UserRow";
import loader from "../../assets/images/load-loading.gif";

type User = {
  users: IUser[];
  loading: boolean;
};

const UsersTable = ({ users, loading }: User) => {
  return (
    <div className="usertable">
      <TableHead />
      {loading && (
        <div className="loading">
          <img src={loader} alt="" />
        </div>
      )}
      {!loading && users.map((data, idx) => <UserRow user={data} idx={idx} />)}
    </div>
  );
};

export default UsersTable;
