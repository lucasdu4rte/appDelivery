export const Types = {
  SET_SELECTED: 'product/SET_SELECTED',
}

const INITIAL_STATE = {}

export default function product(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_SELECTED:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export const Creators = {
  setTypeSelect: data => ({ type: Types.SET_SELECTED, payload: data }),
}
