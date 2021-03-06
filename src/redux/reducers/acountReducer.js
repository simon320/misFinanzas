import { types } from "../actions/types";

const initialState = {
  user: {}
}

const acountReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_ACOUNT: {
      return {
        user: action.payload
      }
    }

    case types.READ_ACOUNT: {
      return {
        ...state,
        user: action.payload
      }
    }

    default:
        return state
  }
}

export { acountReducer };
