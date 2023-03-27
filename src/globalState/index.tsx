import React, { createContext } from "react";
import { getUsersApi, getUserApi } from "../api";

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
  userDetails: IUser | null;
  updateUser: (id: number) => void;
  getUsers: () => Promise<IUser[] | void>;
  getUser: (id: number) => Promise<IUser | void>;
  loading: boolean;
};

type Props = {
  children?: React.ReactNode;
  state?: IUser[] | null;
};

export const UserContext = createContext<UserContextType | null>(null);

const UserProvider = ({ children }: Props) => {
  const [users, setUsers] = React.useState<IUser[]>([]);
  const [userDetails, setUserDetails] = React.useState<IUser | null>(null);

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
  const getUser = async (id: number) => {
    setLoading(true);
    try {
      const res = await getUserApi(id);
      setUserDetails(res.data);
    } catch (error) {
      console.log("something went wrong...");
    }
    setLoading(false);
  };

  return (
    <UserContext.Provider
      value={{ loading, users, getUsers, updateUser, getUser, userDetails }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
