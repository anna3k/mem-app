import {applyMiddleware, createStore} from "redux";
import combineReducers from "./reducer/globaleReducer";
import {memReducer} from "./mem-reducers";
import ReduxThunk from "redux-thunk";

export default function memStore() {
  return createStore(combineReducers(memReducer), applyMiddleware(ReduxThunk));
}
