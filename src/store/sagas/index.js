import { all, takeLatest } from 'redux-saga/effects'

import { Types as AuthTypes } from '~/store/ducks/auth'
import { Types as TypesTypes } from '~/store/ducks/types'

import { login, signup } from './auth'
import { loadTypesRequest } from './types'

export default function* rootSaga() {
  yield all([
    takeLatest(AuthTypes.LOGIN_REQUEST, login),
    takeLatest(AuthTypes.SIGNUP_REQUEST, signup),
    takeLatest(TypesTypes.LOAD_TYPES_REQUEST, loadTypesRequest),
  ])
}
