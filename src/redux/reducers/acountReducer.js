import { types } from "../actions/types";

const initialState = {
  data: []
}

const acountReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_ACOUNT: {
      return {
        ...state,
        data: [...state.data, action.payload]
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
