import { SET_VALUE } from '../actions/index.js';

export const valueReducer = (state = 0, action) => {
  switch(action.type) {
    case SET_VALUE:
      return action.payload;
    default:
      return state;
  }
};

export default valueReducer;


