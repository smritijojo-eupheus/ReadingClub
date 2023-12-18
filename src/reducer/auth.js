const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

const authreducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGINSUCCESS":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        error: null,
      };

    case "LOGIN_FAILURE":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: null,
      };
    default:
      return state;
  }
};
export default authreducer;
