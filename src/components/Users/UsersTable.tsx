import React from "react";
import TableHead from "./TableHead";
import UserRow from "./UserRow";

const UsersTable = () => {
  const datas = [
    {
      createdAt: "Apr 30, 2020 10:00 AM",
      orgName: "repudiandae",
      userName: "Jaycee15",
      email: "debby2@irorun.com",
      phoneNumber: "08078903721",
      status: "Pending",
    },
    {
      createdAt: "Apr 30, 2020 10:00 AM",
      orgName: "accusamus",
      userName: "Jaycee15",
      email: "debby2@irorun.com",
      phoneNumber: "08078903721",
      status: "Blacklisted",
    },
    {
      createdAt: "Apr 30, 2020 10:00 AM",
      orgName: "repudiandae",
      userName: "Jaycee15",
      email: "debby2@irorun.com",
      phoneNumber: "08078903721",
      status: "Pending",
    },
    {
      createdAt: "Apr 30, 2020 10:00 AM",
      orgName: "accusamus",
      userName: "Jaycee15",
      email: "debby2@irorun.com",
      phoneNumber: "08078903721",
      status: "Blacklisted",
    },
    {
      createdAt: "Apr 30, 2020 10:00 AM",
      orgName: "Lendsqr",
      userName: "Jaycee15",
      email: "debby2@irorun.com",
      phoneNumber: "08078903721",
      status: "Inactive",
    },
    {
      createdAt: "Apr 30, 2020 10:00 AM",
      orgName: "Lendsqr",
      userName: "Jaycee15",
      email: "debby2@irorun.com",
      phoneNumber: "08078903721",
      status: "Inactive",
    },
    {
      createdAt: "Apr 30, 2020 10:00 AM",
      orgName: "repudiandae",
      userName: "Jaycee15",
      email: "debby2@irorun.com",
      phoneNumber: "08078903721",
      status: "Pending",
    },
    {
      createdAt: "Apr 30, 2020 10:00 AM",
      orgName: "accusamus",
      userName: "Jaycee15",
      email: "debby2@irorun.com",
      phoneNumber: "08078903721",
      status: "Blacklisted",
    },
    {
      createdAt: "Apr 30, 2020 10:00 AM",
      orgName: "Lendsqr",
      userName: "Jaycee15",
      email: "debby2@irorun.com",
      phoneNumber: "08078903721",
      status: "Inactive",
    },
  ];

  return (
    <div className="usertable">
      <TableHead />
      {datas.map((data) => (
        <UserRow user={data} />
      ))}
    </div>
  );
};

export default UsersTable;
