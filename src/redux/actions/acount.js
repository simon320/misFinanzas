import { db } from "../../firebase/config-firebase";
import { types } from "./types";

export const createAcount = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().authReducer;

    const acount = {
      amount: 0,
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
    
    console.log(user.id)
    // const acount = {
    //   amount
    // };

    let amountRef = db.collection(`users/${uid}/acount`)

    amountRef.doc(user.id).update({
        amount: "123456"
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
