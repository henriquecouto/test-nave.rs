import axios from 'axios';

const navedexBaseUrl = 'https://navedex-api.herokuapp.com/v1';

const navedexApi = axios.create({
  baseURL: navedexBaseUrl,
});

export const login = async (email, password, onSuccess, onError) => {
  try {
    const {data} = await navedexApi.post('/users/login', {email, password});
    onSuccess(data);
  } catch (error) {
    if (error.response) {
      onError(error.response.data.message);
    } else {
      console.log(error);
    }
  }
};
