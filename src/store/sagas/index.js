import { all, takeLatest } from 'redux-saga/effects'

import { Types as AuthTypes } from '~/store/ducks/auth'
import { Types as TypesTypes } from '~/store/ducks/types'
import { Types as ProductsTypes } from '~/store/ducks/products'

import { login, signup, init } from './auth'
import { loadTypesRequest } from './types'
import { loadProductsRequest } from './products'

export default function* rootSaga() {
  yield all([
    init(),

    takeLatest(AuthTypes.LOGIN_REQUEST, login),
    takeLatest(AuthTypes.SIGNUP_REQUEST, signup),
    takeLatest(TypesTypes.LOAD_TYPES_REQUEST, loadTypesRequest),
    takeLatest(ProductsTypes.LOAD_PRODUCTS_REQUEST, loadProductsRequest),
  ])
}
