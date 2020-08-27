import React, {createContext, useState, useEffect} from 'react';
import {loadUserData} from '../helpers/storage/user-data';

export const UserContext = createContext();

export const UserContextProvider = ({children}) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    loadUserData(setUser);
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
