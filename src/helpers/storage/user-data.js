import AsyncStorage from '@react-native-community/async-storage';

const USERDATA_STORAGEKEY = '@user-data';

const saveUserData = async (userData, onSuccess, onError) => {
  try {
    await AsyncStorage.setItem(USERDATA_STORAGEKEY, JSON.stringify(userData));
    onSuccess();
  } catch (error) {
    onError('Ocorreu um erro ao salvar as informações de login');
  }
};

const loadUserData = async (onSuccess) => {
  try {
    const userData =
      JSON.parse(await AsyncStorage.getItem(USERDATA_STORAGEKEY)) || {};
    onSuccess(userData);
  } catch (error) {
    console.log(error);
  }
};

export {saveUserData, loadUserData};
