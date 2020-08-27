import AsyncStorage from '@react-native-community/async-storage';

const USERDATA_STORAGEKEY = '@user-data';

const saveUserData = async (userData, onSuccess, onError) => {
  try {
    await AsyncStorage.setItem(USERDATA_STORAGEKEY, userData);
    onSuccess();
  } catch (error) {
    onError();
  }
};

export {saveUserData};
