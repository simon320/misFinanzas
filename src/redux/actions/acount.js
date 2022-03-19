import { db } from "../../firebase/config-firebase";
import { types } from "./types";

export const createAcount = (amount) => {
    return async (dispatch, getState) => {
      const { uid } = getState().authReducer;
  
      const acount = {
        amount,
        amountPerDay: 0,
        saved: 0,
        valuta: [],
      };
  
      const reference = await db.collection(`${uid}/acount-finances/acount`).add(acount);
      const id = reference.id;
      const newAcount = {
        ...acount,
        id,
      }
  
      dispatch(addAcount(newAcount))
    };
  };

  export const addAcount = (data) => {
    return {
      type: types.ADD_ACOUNT,
      payload: data
    }
  }

  export const readAcount = (data) => {
    return {
      type: types.READ_ACOUNT,
      payload: data
    }
  }

  