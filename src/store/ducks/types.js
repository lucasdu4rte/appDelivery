export const Types = {
  LOAD_TYPES_REQUEST: "type/LOAD_TYPES_REQUEST",
  LOAD_TYPES_SUCCESS: "type/LOAD_TYPES_SUCCESS",
  LOAD_TYPES_FAILURE: "type/LOAD_TYPES_FAILURE",
};

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null
};

export default function types(state = INITIAL_STATE, action) {

  switch (action.type) {

    case Types.LOAD_TYPES_REQUEST:
      return { ...state, loading: true, error: null, token: null };
    case Types.LOAD_TYPES_SUCCESS:
      return { ...state, loading: false, token: action.payload.token };
    case Types.LOAD_TYPES_FAILURE:
      return { ...state, loading: false, error: action.payload.error };

    default:
      return state;
  }
}

export const Creators = {
  loadTypesRequest: data => ({
    type: Types.LOAD_TYPES_REQUEST,
    payload: data
  }),
  loadTypesSuccess: data => ({
    type: Types.LOAD_TYPES_SUCCESS,
    payload: data
  }),
  loadTypesFailure: error => ({ type: Types.LOAD_TYPES_FAILURE, payload: { error } }),

};
