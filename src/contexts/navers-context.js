import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from 'react';
import {UserContext} from './user-context';
import {loadNavers} from '../helpers/api';

export const NaversContext = createContext();

export const NaversContextProvider = ({children}) => {
  const [user] = useContext(UserContext);
  const [navers, setNavers] = useState([]);

  const callLoadNavers = useCallback(() => {
    loadNavers(user.token, setNavers);
  }, [user.token]);

  useEffect(() => {
    if (user.token) {
      callLoadNavers();
    }
  }, [user.token, callLoadNavers]);

  const addNaver = (naverData, next) => {
    setNavers((old) => [...old, naverData]);
    if (next) {
      next();
    }
  };

  const deleteNaver = (naverId, next) => {
    const newNavers = navers.filter((naver) => naver.id !== naverId);
    setNavers(newNavers);
    if (next) {
      next();
    }
  };

  const updateNaver = (naverId, newNaverData, next) => {
    const naverIndexToUpdate = navers.findIndex(
      (naver) => naver.id === naverId,
    );
    const newNavers = [...navers];
    newNavers[naverIndexToUpdate] = newNaverData;

    setNavers(newNavers);

    if (next) {
      next();
    }
  };

  return (
    <NaversContext.Provider
      value={[navers, {addNaver, deleteNaver, updateNaver}]}>
      {children}
    </NaversContext.Provider>
  );
};
