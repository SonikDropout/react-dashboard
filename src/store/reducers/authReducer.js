const initialState = {
  authError: null
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
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
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        authError: null
      }
    case 'SIGNUP_ERROR':
      return {
        ...state,
        authError: action.error.message
      }
    default:
      return state;
  }
}