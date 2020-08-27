import validator from 'validator';
import {login} from '../api';

export default function makeLogin(email, password, onSuccess, onError) {
  if (!validator.isEmail(email)) {
    onError('Você inseriu um email inválido!');
    return;
  }

  if (password.length < 6) {
    onError('A sua senha está inválida!');
    return;
  }

  login(email, password, onSuccess, onError);
}
