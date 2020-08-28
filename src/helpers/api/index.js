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

export const loadNavers = async (authToken, onSuccess, onError) => {
  try {
    const {data} = await navedexApi.get('/navers', {
      headers: {Authorization: `Bearer ${authToken}`},
    });
    onSuccess(data);
  } catch (error) {
    onError(error.response.data);
  }
};
