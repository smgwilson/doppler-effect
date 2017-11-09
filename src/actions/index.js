export const SET_VALUE = "SET_VALUE";

export const setValue = value => {
  return {
    type: SET_VALUE,
    payload: value
  };
};

