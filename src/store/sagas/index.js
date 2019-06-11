import { all, takeLatest } from 'redux-saga/effects'

import { Types as AuthTypes } from '~/store/ducks/auth'

import { login, signup } from './auth'

export default function* rootSaga() {
  yield all([
    takeLatest(AuthTypes.LOGIN_REQUEST, login),
    takeLatest(AuthTypes.SIGNUP_REQUEST, signup),
  ])
}
