import Immutable from 'seamless-immutable'

export const Types = {
  LOAD_PRODUCTS_REQUEST: "products/LOAD_PRODUCTS_REQUEST",
  LOAD_PRODUCTS_SUCCESS: "products/LOAD_PRODUCTS_SUCCESS",
  LOAD_PRODUCTS_FAILURE: "products/LOAD_PRODUCTS_FAILURE",
};

const INITIAL_STATE = Immutable({
  data: [],
  loading: false,
  error: null
})

export default function products(state = INITIAL_STATE, action) {

  switch (action.type) {
    case Types.LOAD_PRODUCTS_REQUEST:
      return state.merge({ loading: true, error: null })
    case Types.LOAD_PRODUCTS_SUCCESS:
      return state.merge({ loading: false, data: action.payload.data })
    case Types.LOAD_PRODUCTS_FAILURE:
      return state.merge({ loading: false, error: action.payload.error })

    default:
      return state;
  }
}

export const Creators = {
  loadProductsRequest: data => ({
    type: Types.LOAD_PRODUCTS_REQUEST,
    payload: data
  }),
  loadProductsSuccess: data => ({
    type: Types.LOAD_PRODUCTS_SUCCESS,
    payload: data
  }),
  loadProductsFailure: error => ({ type: Types.LOAD_PRODUCTS_FAILURE, payload: { error } }),

};
