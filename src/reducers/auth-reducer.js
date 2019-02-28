import constants from './../constants';
const { initialState, types } = constants;

export default (state = initialState, action) => {
  let user;
  let newLoggedInUserStateSlice;
  switch (action.type) {
    case types.USER_LOGIN:
      const user =  action.user;
      const googleEmail = action.user.email;
      newLoggedInUserStateSlice = Object.assign({}, user, googleEmail);
      return newLoggedInUserStateSlice;
    case types.USER_LOGOUT:
      newLoggedInUserStateSlice = null;
      return newLoggedInUserStateSlice;
    default:
      return state;
  }
}
