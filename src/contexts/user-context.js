import React, {createContext, useState, useEffect} from 'react';
import {loadUserData} from '../helpers/storage/user-data';
import Loading from '../components/Loading';

export const UserContext = createContext();

export const UserContextProvider = ({children}) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    loadUserData(setUser);
  }, []);

  if (!user) {
    return <Loading />;
  }

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
