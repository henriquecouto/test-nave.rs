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
    console.log(error.response.data);
  }
};

export const removeNaver = async (naverId, authToken, onSuccess) => {
  try {
    const {data} = await navedexApi.delete(`/navers/${naverId}`, {
      headers: {Authorization: `Bearer ${authToken}`},
    });
    onSuccess();
    console.log(data);
  } catch (error) {
    console.log(error.response.data);
  }
};

export const createNaver = async (naverData, authToken, onSuccess) => {
  try {
    const {data} = await navedexApi.post('/navers', naverData, {
      headers: {Authorization: `Bearer ${authToken}`},
    });

    onSuccess(data);
  } catch (error) {
    console.log(error.response.data);
  }
};

export const showNaver = async (naverId, authToken, onSuccess) => {
  try {
    const {data} = await navedexApi.get(`/navers/${naverId}`, {
      headers: {Authorization: `Bearer ${authToken}`},
    });
    onSuccess(data);
  } catch (error) {
    console.log(error.response.data);
  }
};

export const editNaver = async (naverId, naverData, authToken, onSuccess) => {
  console.log({naverData});
  try {
    const {data} = await navedexApi.put(`/navers/${naverId}`, naverData, {
      headers: {Authorization: `Bearer ${authToken}`},
    });
    onSuccess(data);
  } catch (error) {
    console.log(error.response.data);
  }
};
