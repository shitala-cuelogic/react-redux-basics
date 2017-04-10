const userReducer = (state = {
  name: "Max",
  age: 1
}, action) => {
  switch (action.type) {
    case "SET_NAME_FULFILLED": //this name is required as we have used promise package for async functionality
      state = {
        ...state,
        name: action.payload
      };
      break;
    case "SET_AGE":
      state = {
        ...state,
        name: action.payload
      };
      break;
  }

  return state;
};


export default userReducer;