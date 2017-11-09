import { SET_VALUE } from '../actions/index.js';
import { combineReducers } from "redux";

export const valueReducer = (state = 0, action) => {
  switch(action.type) {
    case SET_VALUE:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({ appVal: valueReducer });


