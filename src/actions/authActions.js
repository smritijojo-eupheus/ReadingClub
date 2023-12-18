export const loginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});
export const loginFailure = (error) => ({
  type: "LOGIN_FAILURE",
  paload: error,
});
export const logout = () => ({
  type: "LOGOUT",
});
