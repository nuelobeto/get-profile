import React, { createContext, useEffect, useState } from "react";
import { getProfile } from "./../services/profileService";

type ProviderT = {
  children: React.ReactNode;
};

type UserT = {
  email: string;
  password: string;
};

type ProfileT = {
  email: string;
  name: string;
  company: string;
  occupation: string;
  marital_status: string;
};

type ContextT = {
  user: UserT | null;
  setUser: React.Dispatch<React.SetStateAction<UserT | null>>;
  profile: ProfileT | null;
  setProfile: React.Dispatch<React.SetStateAction<ProfileT | null>>;
};

export const GlobalContext = createContext<ContextT>({} as ContextT);

export const GlobalProvider = ({ children }: ProviderT) => {
  const [user, setUser] = useState<UserT | null>(null);
  const [profile, setProfile] = useState<ProfileT | null>(null);

  useEffect(() => {
    const userStorage = localStorage.getItem("user");
    let savedUser;
    if (typeof userStorage === "string") {
      savedUser = JSON.parse(userStorage);
    }

    setUser(savedUser ? savedUser : null);
  }, []);

  const handleGetProfile = async () => {
    const res = await getProfile();
    setProfile(res);
  };

  useEffect(() => {
    if (user === null) {
      return;
    }
    handleGetProfile();
  }, [user]);

  return (
    <GlobalContext.Provider
      value={{
        user,
        setUser,
        profile,
        setProfile,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
