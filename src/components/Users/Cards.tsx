import React from "react";
import { ActiveUsers, AllUsers, LoansUsers, SavingUsers } from "../icons";

const Cards = () => {
  return (
    <div className="cards">
      <div>
        <AllUsers />
        <p>Users</p>
        <h3>2,453</h3>
      </div>
      <div>
        <ActiveUsers />
        <p>Active Users</p>
        <h3>2,453</h3>
      </div>
      <div>
        <LoansUsers />
        <p>Users with Loans</p>
        <h3>2,453</h3>
      </div>
      <div>
        <SavingUsers />
        <p>Users with Savings</p>
        <h3>2,453</h3>
      </div>
    </div>
  );
};

export default Cards;
