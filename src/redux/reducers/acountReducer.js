import { types } from "../actions/types";


const acountReducer = (state = {}, action) => {
  switch (action.type) {
    case types.ADD_ACOUNT: {
      return {
        ...state,
        amount: action.payload
      }
    }

    case types.READ_ACOUNT: {
      return {
        ...state,
        data: action.payload
      }
    }

    default:
        return state
  }
}

export { acountReducer };
