import validator from 'validator';
import {login} from '../api';
import {saveUserData, removeUserData} from '../storage/user-data';

export function makeLogin(email, password, successCallback, errorCallback) {
  if (!validator.isEmail(email)) {
    errorCallback('Você inseriu um email inválido!');
    return;
  }

  if (password.length < 6) {
    errorCallback('A sua senha está inválida!');
    return;
  }

  const onSuccess = (userData) => {
    saveUserData(userData, successCallback, errorCallback);
  };

  login(email, password, onSuccess, errorCallback);
}

export function makeLogout(successCallback) {
  removeUserData(successCallback);
}
