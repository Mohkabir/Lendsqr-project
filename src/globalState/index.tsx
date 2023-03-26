import React, { createContext, useReducer, FC, useState } from "react";
import { getUsersApi } from "../api";

type ProfileType = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  avatar: string;
  gender: string;
  bvn: string;
  address: string;
  currency: string;
};
type GuarantorType = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: string;
  address: string;
};

export interface IUser {
  id: string;
  createdAt: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  lastActiveDate: string;
  profile: ProfileType;
  guarantor: GuarantorType;
  accountBalance: string;
  accountNumber: string;
  socials: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  education: {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    monthlyIncome: string[];
    loanRepayment: string;
  };
}

export type UserContextType = {
  users: IUser[];
  updateUser: (id: number) => void;
  getUsers: () => Promise<IUser[] | void>;
  loading: boolean;
};

type Props = {
  children?: React.ReactNode;
  state?: IUser[] | null;
};

export const UserContext = createContext<UserContextType | null>(null);

const UserProvider = ({ children }: Props) => {
  const [users, setUsers] = React.useState<IUser[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  const updateUser = (id: number) => {
    // users.filter((todo: IUser) => {
    //   if (todo.id === id) {
    //     todo.status = true;
    //     setUsers([...users]);
    //   }
    // });
  };
  const getUsers = async () => {
    setLoading(true);
    try {
      const res = await getUsersApi();
      setUsers(res.data);
    } catch (error) {
      console.log("something went wrong...");
    }
    setLoading(false);
  };

  return (
    <UserContext.Provider value={{ loading, users, getUsers, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
