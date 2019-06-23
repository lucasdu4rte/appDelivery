export const Types = {
  SIGNUP_REQUEST: "auth/SIGNUP_REQUEST",
  SIGNUP_SUCCESS: "auth/SIGNUP_SUCCESS",
  SIGNUP_FAILURE: "auth/SIGNUP_FAILURE",
  LOGIN_REQUEST: "auth/LOGIN_REQUEST",
  LOGIN_SUCCESS: "auth/LOGIN_SUCCESS",
  LOGIN_FAILURE: "auth/LOGIN_FAILURE",
  CLEAR_ERROR: "auth/CLEAR_ERROR",
  LOGOUT: "auth/LOGOUT",
  INIT_CHECK_SUCCESS: "auth/INIT_CHECK_SUCCESS"
};

const INITIAL_STATE = {
  authChecked: false,
  signedIn: false,
  token: null,
  roles: [],
  permissions: [],
  loading: false,
  error: null
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SIGNUP_REQUEST:
      return { ...state, loading: true, error: null };
    case Types.SIGNUP_SUCCESS:
      return { ...state, loading: false };
    case Types.SIGNUP_FAILURE:
      return { ...state, loading: false, error: action.payload.error };

    case Types.LOGIN_REQUEST:
      return { ...state, loading: true, error: null, token: null };
    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        signedIn: true,
        token: action.payload.token
      };
    case Types.LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload.error };

    case Types.LOGOUT:
      return { ...state, signedIn: false, token: null };

    case Types.CLEAR_ERROR:
      return { ...state, error: null };

    case Types.INIT_CHECK_SUCCESS:
      return { ...state, authChecked: true };
    default:
      return state;
  }
}

export const Creators = {
  signupRequest: data => ({
    type: Types.SIGNUP_REQUEST,
    payload: data
  }),
  signupSuccess: () => ({
    type: Types.SIGNUP_SUCCESS
  }),
  signupFailure: error => ({ type: Types.SIGNUP_FAILURE, payload: { error } }),

  loginRequest: data => ({
    type: Types.LOGIN_REQUEST,
    payload: data
  }),
  loginSuccess: data => ({
    type: Types.LOGIN_SUCCESS,
    payload: data
  }),
  loginFailure: error => ({ type: Types.LOGIN_FAILURE, payload: { error } }),

  logout: () => ({ type: Types.LOGOUT }),

  clearError: () => ({ type: Types.CLEAR_ERROR }),

  checkSuccess: () => ({
    type: Types.INIT_CHECK_SUCCESS
  })
};
