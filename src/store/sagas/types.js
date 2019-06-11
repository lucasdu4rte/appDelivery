import { call, put, all } from "redux-saga/effects";

import api from "~/services/api";

import { Creators as TypesAction } from "../ducks/types";

export function* loadTypesRequest(action) {
  try {
    const {
      data
    } = yield call(api.get, "/types", action.payload);

    yield all([
      put(TypesAction.loadTypesSuccess({ data })),
    ]);
  } catch (err) {
    put(TypesAction.loadTypesFailure(true))
  }
}
