import React, {createContext, useState, useEffect} from 'react';
import {loadUserData} from '../helpers/storage/user-data';
import Loading from '../components/Loading';
import {makeLogout, makeLogin} from '../helpers/actions/auth';

export const UserContext = createContext();

export const UserContextProvider = ({children}) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    loadUserData(setUser);
  }, []);

  if (!user) {
    return <Loading />;
  }

  const logout = () => {
    setUser({});
    makeLogout();
  };

  const login = (email, password, successCallback, errorCallback) => {
    const onSuccess = (userData) => {
      setUser(userData);
      successCallback();
    };
    makeLogin(email, password, onSuccess, errorCallback);
  };

  return (
    <UserContext.Provider value={[user, {login, logout}]}>
      {children}
    </UserContext.Provider>
  );
};
