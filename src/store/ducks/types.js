import Immutable from 'seamless-immutable'

export const Types = {
  LOAD_TYPES_REQUEST: "type/LOAD_TYPES_REQUEST",
  LOAD_TYPES_SUCCESS: "type/LOAD_TYPES_SUCCESS",
  LOAD_TYPES_FAILURE: "type/LOAD_TYPES_FAILURE",
};

const INITIAL_STATE = Immutable({
  data: [],
  loading: false,
  error: null
})

export default function types(state = INITIAL_STATE, action) {

  switch (action.type) {

    case Types.LOAD_TYPES_REQUEST:
      return state.merge({ loading: true, error: null })
      // return { ...state, loading: true, error: null, token: null };
    case Types.LOAD_TYPES_SUCCESS:
      return state.merge({ loading: false, data: action.payload.data })
      // return { ...state, loading: false, data: action.payload.data };
    case Types.LOAD_TYPES_FAILURE:
      return state.merge({ loading: false, error: action.payload.error })
      // return { ...state, loading: false, error: action.payload.error };

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
