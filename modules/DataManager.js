import AsyncStorage from '@react-native-async-storage/async-storage';
export async function storeData(key, value){
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      // saving error
      console.error(e);
    }
  };

export async function getData(key){
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        // value previously stored
        return value;
      }
    } catch (e) {
      // error reading value
      console.error(e);
    }
  };
