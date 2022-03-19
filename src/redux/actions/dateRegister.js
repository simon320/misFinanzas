import { db } from "../../firebase/config-firebase";
import { types } from "./types";


export const recordIncome = (date, description, income) => {
  return async (dispatch, getState) => {
    const { uid } = getState().authReducer;

    const currentDate = {
      date,
      character: "Ingreso",
      description,
      incomes: income,
    };

    const reference = await db.collection(`${uid}/date-finances/finance`).add(currentDate);
    const id = reference.id;
    const newRegister = {
      ...currentDate,
      id,
    }

    dispatch(addRegister(newRegister))
  };
};

export const recordExpense = (date, description, expense) => {
  return async (dispatch, getState) => {
    const { uid } = getState().authReducer;

    const currentDate = {
      date,
      character: "Gasto",
      description,
      expense: expense,
    };

    const reference = await db.collection(`${uid}/date-finances/finance`).add(currentDate);
    const id = reference.id;
    const newRegister = {
      ...currentDate,
      id,
    }

    dispatch(addRegister(newRegister))
  };
};


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
    
    await db.doc(`${uid}/date-finances/finance/${id}`).delete();
    
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

    const reference = await db.collection(`${uid}/date-finances/finance`).add(currentDate);
    console.log(reference)
  };
};
///////////////////////////////////////////////////////////