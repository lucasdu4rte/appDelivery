// import Immutable from 'seamless-immutable'

export const Types = {
  ADD_ITEM: "cart/ADD_ITEM",
  REMOVE_ITEM: "cart/REMOVE_ITEM",
  RESET_CART: "cart/RESET_CART"
};

const INITIAL_STATE = [];

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_ITEM:
      return [...state, action.payload];
    case Types.REMOVE_ITEM:
      return state.filter(item => item.id === action.payload.id);
    case Types.RESET_CART:
      return [];
    default:
      return state;
  }
}

export const Creators = {
  addItem: data => ({ type: Types.ADD_ITEM, payload: data }),
  removeItem: data => ({ type: Types.REMOVE_ITEM, payload: data }),
  resetCart: data => ({ type: Types.RESET_CART })
};
