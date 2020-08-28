import React, {createContext, useState, useEffect} from 'react';
import {loadUserData} from '../helpers/storage/user-data';
import Loading from '../components/Loading';
import {makeLogout} from '../helpers/actions/auth';

export const UserContext = createContext();

export const UserContextProvider = ({children}) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    loadUserData(setUser);
  }, []);

  if (!user) {
    return <Loading />;
  }

  const logout = async () => {
    const onSuccess = () => setUser({});
    makeLogout(onSuccess);
  };

  return (
    <UserContext.Provider value={[user, {logout}]}>
      {children}
    </UserContext.Provider>
  );
};
