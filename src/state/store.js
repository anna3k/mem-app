import {applyMiddleware, createStore} from "redux";
import {memReducer, STATE} from "./mem-reducers";
import ReduxThunk from "redux-thunk";

export default function memStore() {
  return createStore(memReducer, STATE, applyMiddleware(ReduxThunk));
}
