import { db } from "../../firebase/config-firebase";
import { doc, setDoc,  } from "firebase/firestore";
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
      .collection(`${uid}/acount-finances/acount`)
      .add(acount);
    const id = reference.id;
    const newAcount = {
      acount
    };

    dispatch(addAcount(newAcount));
  };
}

export const editAcount = (amount) => {
  return async (dispatch, getState) => {
    const { uid } = getState().authReducer;
    const { id } = getState().acountReducer;
console.log(id)
    const acount = {
      amount
    };

    let amountRef = db.collection(`${uid}/acount-finances/acount`)

    amountRef.doc(id).update({
      amount: {
        amount: "20000"
      }
    })

  };
};

export const addAcount = (data) => {
  return {
    type: types.ADD_ACOUNT,
    payload: data,
  };
};

export const readAcount = (data) => {
  return {
    type: types.READ_ACOUNT,
    payload: data,
  };
};
