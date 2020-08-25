import axios from 'axios';

const navedexBaseUrl = 'https://navedex-api.herokuapp.com/v1';

const navedexApi = axios.create({
  baseURL: navedexBaseUrl,
});

const login = async (email, password, onSuccess, onError) => {
  try {
    const {data} = await navedexApi.post('/users/signup', {email, password});
    onSuccess(data);
    return;
  } catch (error) {
    onError(error);
  }
};

export default {login};
