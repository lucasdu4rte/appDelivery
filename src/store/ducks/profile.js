export const Types = {
  SET_DATA: 'profile/SET_DATA',
}

const INITIAL_STATE = {}

export default function profile(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_DATA:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export const Creators = {
  setProfileData: data => ({ type: Types.SET_DATA, payload: data }),
}
