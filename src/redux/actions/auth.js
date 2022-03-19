import { types } from "./types";
import { firebase, googleAuthProvider } from "../../firebase/config-firebase";

export const googleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      });
  };
};

export const emailAndPasswordLogin = (email, password) => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      });
  };
};

export const register = (email, username, password) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: username });
        dispatch(login(user.uid, user.displayName));
      });
  };
};

export const login = (uid, displayName) => {
  return {
    type: types.LOGIN,
    payload: {
      uid,
      displayName,
    },
  };
};

export const logout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();
    dispatch({
      type: types.LOGOUT,
    });
  };
};
