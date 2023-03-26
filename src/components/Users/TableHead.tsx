import React from "react";
import { FilterIcon } from "../icons";

const TableHead = () => {
  return (
    <div className="tableHead">
      <p>
        organization
        <FilterIcon />
      </p>
      <p>
        username
        <FilterIcon />
      </p>
      <p>
        email
        <FilterIcon />
      </p>
      <p>
        phoneNumber
        <FilterIcon />
      </p>
      <p>
        createdAt
        <FilterIcon />
      </p>
      <p>
        status
        <FilterIcon />
      </p>
    </div>
  );
};

export default TableHead;
