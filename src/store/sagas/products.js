import { call, put, all } from "redux-saga/effects";

import api from "~/services/api";

import { Creators as ProductsAction } from "../ducks/products";

export function* loadProductsRequest(action) {
  try {
    const {
      data
    } = yield call(api.get, `/products?type_id=${action.payload}`, );

    yield all([
      put(ProductsAction.loadProductsSuccess({ data })),
    ]);
  } catch (err) {
    put(ProductsAction.loadProductsFailure(true))
  }
}
