import {findAllMemsEffect, updateMemEffect} from "./mem-effects";

export const UPDATE_MEM_SUCCESS = "UPDATE_MEM_SUCCESS";
export const ADD_MEM_SUCCESS = "ADD_MEM_SUCCESS";
export const FIND_MEMS_SUCCESS = "FIND_MEMS_SUCCESS"

export function updateMemSuccess(mem) {
  return {
    type: UPDATE_MEM_SUCCESS,
    payload: mem,
  };
}

export function addMemSuccess(mem) {
  return {
    type: ADD_MEM_SUCCESS,
    payload: mem,
  };
}

export function findMemsSuccess(mems) {
  return {
    type: FIND_MEMS_SUCCESS,
    payload: mems,
  };
}

export function updateMem(mem) {
  return (dispatch) => updateMemEffect(mem)
    .then(response => dispatch(updateMemSuccess(response)));
}

export function findAllMems() {
  return (dispatch) => findAllMemsEffect()
    .then(response => dispatch(findMemsSuccess(response)));
}
