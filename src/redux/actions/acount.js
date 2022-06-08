import { db } from "../../firebase/config-firebase";
import { loadDataAcount } from "../../helpers/loadDataAcount";
import { loadDataAcountSnap } from "../../helpers/loadDataAcountSnap";
import { types } from "./types";

export const createAcount = (amount) => {
  return async (dispatch, getState) => {
    const { uid } = getState().authReducer;

    const acount = {
      amount: amount,
      amountPerDay: 0,
      saved: 0,
      valuta: [{
        dolar: 0
      }],
    };

    // const reference = await db
    //   .collection(`users/${uid}/acount`)
    //   .add(acount);

    const reference = db.collection(`users/${uid}/acount`)

    reference.add(acount);

    const id = reference.id;
    const startAcount = {
      ...acount,
      id
    };

    dispatch(addAcount(startAcount));
  };
}

export const editAmount = (amount) => {
  return async (dispatch, getState) => {
    const { uid } = getState().authReducer;
    const { user } = getState().acountReducer;
    
    const amountRef = db.collection(`users/${uid}/acount`)
    
    amountRef.doc(user.id).update({
      amount: amount
    })
    // const amountRef = await db.collection(`users/${uid}/acount`).doc(user.id).update({
    //   amount: amount
    // })

    // const dataAcount = await loadDataAcount(uid);
    // dispatch(readAcount(dataAcount));
  };
};

export const editSaving = (saved) => {
  return async (dispatch, getState) => {
    const { uid } = getState().authReducer;
    const { user } = getState().acountReducer;
    
    let savedRef = db.collection(`users/${uid}/acount`);

    savedRef.doc(user.id).update({
        saved: saved
    });
  };
};

export const editBadge = (badge) => {
  return async (dispatch, getState) => {
    const { uid } = getState().authReducer;
    const { user } = getState().acountReducer;
    
    let badgeRef = db.collection(`users/${uid}/acount`);

    badgeRef.doc(user.id).update({
        valuta: {
          dolar: badge
        } 
    });

    // const dataAcount = await loadDataAcount(uid);
    // dispatch(readAcount(dataAcount));
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
