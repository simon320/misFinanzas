import { db } from "../../firebase/config-firebase";
import { loadDataAcount } from "../../helpers/loadDataAcount";
import { types } from "./types";

export const createAcount = (amount) => {
  return async (dispatch, getState) => {
    const { uid } = getState().authReducer;

    const acount = {
      amount: amount,
      amountPerDay: 0,
      saved: 0,
      valuta: [],
    };

    const reference = await db
      .collection(`users/${uid}/acount`)
      .add(acount);
    const id = reference.id;
    const newAcount = {
      id,
      ...acount
    };

    dispatch(addAcount(newAcount));
  };
}

export const editAcount = (amount) => {
  return async (dispatch, getState) => {
    const { uid } = getState().authReducer;
    const { user } = getState().acountReducer;
    
    let amountRef = db.collection(`users/${uid}/acount`)

    amountRef.doc(user.id).update({
        amount: amount
    })
  };
};

export const addAcount = (user) => {
  return {
    type: types.ADD_ACOUNT,
    payload: user,
  };
};

export const readAcount = (user) => {
  return {
    type: types.READ_ACOUNT,
    payload: user,
  };
};

export const editSaving = (saved) => {
  return async (dispatch, getState) => {
    const { uid } = getState().authReducer;
    const { user } = getState().acountReducer;
    
    let savedRef = db.collection(`users/${uid}/acount`)

    savedRef.doc(user.id).update({
        saved: saved
    })
  };
};
