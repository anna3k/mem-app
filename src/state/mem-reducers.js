import {ADD_MEM_SUCCESS, FIND_MEMS_SUCCESS, UPDATE_MEM_SUCCESS} from "./mem-actions";
import {HOT_MEM, REGULAR_MEM} from "../mem/mem-type";

export const STATE = {
  [HOT_MEM]: [],
  [REGULAR_MEM]: []
}

export const memReducer = (state = STATE, action) => {
  switch (action.type) {
    case FIND_MEMS_SUCCESS:
      return mapFindMemToState(action.payload, state)
    case UPDATE_MEM_SUCCESS:
      return mapUpdateMemToState(action.payload, state)
    case ADD_MEM_SUCCESS:
      return {
        ...state,
        mems: [...state.mems, action.payload]
      };
    default:
      return state;
  }
}

const mapFindMemToState = (mems, state) => {
  const {hotMems, regularMems} = categorizeMems(mems)
  return {
    ...state,
    hotMems: hotMems,
    regularMems: regularMems
  }
}

const mapUpdateMemToState = (updatedMem, state) => {
  const mems = [...state.hotMems, ...state.regularMems].map(mem => mem.id === updatedMem.id ? updatedMem : mem);
  const {hotMems, regularMems} = categorizeMems(mems);
  return {
    ...state,
    hotMems: hotMems,
    regularMems: regularMems
  }
}

const categorizeMems = (mems) => {
  const hotMems = [], regularMems = [];
  mems.forEach(mem => {
    switch (getMemType(mem)) {
      case HOT_MEM:
        hotMems.push(mem);
        break;
      case REGULAR_MEM:
        regularMems.push(mem);
        break;
    }
  });
  return {hotMems, regularMems};
}

const getMemType = ({upvotes, downvotes}) => {
  return upvotes - downvotes > 5 ? HOT_MEM : REGULAR_MEM
}