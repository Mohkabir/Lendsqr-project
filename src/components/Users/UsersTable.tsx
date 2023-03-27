import React, { useEffect, useRef, useState } from "react";
import { IUser } from "../../globalState";
import TableHead from "./TableHead";
import UserRow from "./UserRow";
import loader from "../../assets/images/load-loading.gif";
import Btn from "../Button";
import { DateIcon } from "../icons";

type User = {
  users: IUser[];
  loading: boolean;
};

const UsersTable = ({ users, loading }: User) => {
  const dateRef = useRef<HTMLInputElement>(null);
  const [orgNames, setOrgNames] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  useEffect(() => {
    const orgnames = users.map((user) => user.orgName);
    setOrgNames(orgnames);
  }, [users]);

  const openDate = () => {
    console.log("cloked..");
    dateRef.current?.showPicker();
  };

  return (
    <div className="usertable">
      <TableHead openFilter={() => setIsFilterOpen(!isFilterOpen)} />
      {loading && (
        <div className="loading">
          <img src={loader} alt="" />
        </div>
      )}
      {!loading &&
        users.map((data, idx) => (
          <UserRow
            user={data}
            openFilter={() => setIsFilterOpen(!isFilterOpen)}
            idx={idx}
          />
        ))}

      {isFilterOpen && (
        <div className="filter">
          <div className="close">
            <button type="button" onClick={() => setIsFilterOpen(false)}>
              x
            </button>
          </div>

          <div className="group">
            <h6>Organization</h6>
            <select name="organization">
              <>
                <option selected value="" disabled className="default">
                  Select
                </option>
                {orgNames.map((orgName) => (
                  <option value={orgName}>{orgName}</option>
                ))}
              </>
            </select>
          </div>
          <div className="group">
            <h6>Username</h6>
            <input type="text" placeholder="Username" />
          </div>
          <div className="group">
            <h6>Email</h6>
            <input placeholder="Email" type="text" />
          </div>
          <div className="group">
            <h6>Date</h6>
            <div className="date">
              <input type="date" name="date" ref={dateRef} />
              <span onClick={openDate}>
                Date <DateIcon />
              </span>
            </div>
          </div>
          <div className="group">
            <h6>Phone Number</h6>
            <input type="number" placeholder="Phone Number" />
          </div>
          <div className="group">
            <h6>Status</h6>
            <select name="" id="">
              <option value=""></option>
            </select>
          </div>
          <div className="btnGroup">
            <Btn title="Reset" />
            <Btn title="Filter" primary />
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersTable;
