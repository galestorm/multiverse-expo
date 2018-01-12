import { AsyncStorage } from 'react-native';

export const onSignIn = (uid) => AsyncStorage.setItem('uid', uid );

export const onSignOut = () => AsyncStorage.removeItem('uid');

export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem('uid')
      .then(res => {
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};
