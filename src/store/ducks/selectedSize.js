export const Types = {
  SET_SELECTED: 'size/SET_SELECTED',
}

const INITIAL_STATE = {}

export default function size(state = INITIAL_STATE, action) {
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
