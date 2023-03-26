import React, { FC } from "react";
import { IUser } from "../../globalState";
import TableHead from "./TableHead";
import UserRow from "./UserRow";

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
          <p>loading....</p>
        </div>
      )}
      {!loading && users.map((data, idx) => <UserRow user={data} idx={idx} />)}
    </div>
  );
};

export default UsersTable;
