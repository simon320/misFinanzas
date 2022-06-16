import { db } from "../../firebase/config-firebase";
import { types } from "./types";


export const recordRegister = (date, typeRegister, description, amountRegister, completed) => {
  return async (dispatch, getState) => {
    const { uid } = getState().authReducer;

    const currentDate = {
      date,
      character: typeRegister,
      description,
      typeRegister: amountRegister,
      completed: completed,
    };

    const reference = await db.collection(`users/${uid}/register-finances`).add(currentDate);
    const id = reference.id;
    const newRegister = {
      id,
      ...currentDate
    }

    dispatch(addRegister(newRegister))
  };
};

// export const editRegister = (id, item) => {
//   return async (dispatch, getState) => {
//     const { uid } = getState().authReducer;

//     const reference = await db.collection(`users/${uid}/register-finances/${id}`).set({
//       ...item,
//       completed: true
//     });
//     // const id = reference.id;
//     // const newRegister = {
//     //   id,
//     //   ...register
//     // }

//     // dispatch(addRegister(newRegister))
//   };
// };


export const readRegister = (dataRegister) => {
  return {
    type: types.READ_REGISTER,
    payload: dataRegister
  }
}

export const addRegister = (dataRegister) => {
  return {
    type: types.ADD_REGISTER,
    payload: dataRegister
  }
}


export const deleteRegisterDB = (id) => {
  return async (dispatch, getState) => {
    const { uid } = getState().authReducer;
    
    await db.doc(`users/${uid}/register-finances/${id}`).delete();
    
    dispatch(deleteRegister(id))
  };
};

export const deleteRegister = (id) => {
  return {
    type: types.DELETE_REGISTER,
    payload: id
  }
}

export const cleanLogout = () => {
  return {
    type: types.CLEAN_LOGOUT
  }
}

///////////////////////////////////////////////////////
export const createRegister = (date) => {
  return async (dispatch, getState) => {
    const { uid } = getState().authReducer;

    const currentDate = {
      date,
      incomes: [],
      expenses: []
    };

    const reference = await db.collection(`users/${uid}/register-finances`).add(currentDate);
    console.log(reference)
  };
};
///////////////////////////////////////////////////////////