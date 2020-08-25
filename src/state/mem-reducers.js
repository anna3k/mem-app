import {ADD_MEM_SUCCESS, FIND_MEMS_SUCCESS, UPDATE_MEM_SUCCESS} from "./mem-actions";

export const STATE = {
  mems: []
}

export const memReducer = (state = STATE, action) => {
  console.log('state from reducer: ', state)
  switch (action.type) {
    case FIND_MEMS_SUCCESS:
      return {
        ...state,
        mems: action.payload
      };
    case UPDATE_MEM_SUCCESS:
      const updatedMems = state.mems.map(mem => mem.id === action.payload ? action.payload : mem);
      return {
        ...state,
        mems: updatedMems
      };
    case ADD_MEM_SUCCESS:
      return {
        ...state,
        mems: [...state.mems, action.payload]
      };
    default:
      return state;
  }
}