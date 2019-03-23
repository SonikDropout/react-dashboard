const initialState = {
  authError: null
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      console.log('error');

      return {
        ...state,
        authError: 'Login failed'
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        authError: null
      }
    case 'LOGOUT_SUCCESS':
      return state;
    default:
      return state;
  }
}