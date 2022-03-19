import { types } from "../actions/types";

const initialState = {
  dataRegister: []
}

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_REGISTER: {
      return {
        ...state,
        dataRegister: [...state.dataRegister, action.payload]
      }
    }

    case types.READ_REGISTER: {
      return {
        ...state,
        dataRegister: action.payload
      }
    }

    case types.DELETE_REGISTER: {
      return {
        ...state,
        dataRegister: state.dataRegister.filter((actual) => actual.id !== action.payload)
      }
    }

    case types.CLEAN_LOGOUT: {
      return {
        ...state,
        dataRegister: []
      }
    }

    default:
      return state;
  }
};

export { registerReducer };
