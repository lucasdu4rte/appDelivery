import { call, put, all } from "redux-saga/effects";

import api from "~/services/api";
import { navigate } from '~/services/navigation';

import { Creators as AuthActions } from "../ducks/auth";
import { Creators as ProfileActions } from "../ducks/profile";

export function* login(action) {
  try {
    const {
      data: { token, user }
    } = yield call(api.post, "/sessions", action.payload);
    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    yield all([
      put(AuthActions.loginSuccess({ token })),
      put(
        ProfileActions.setProfileData(user)
      )
    ]);
    navigate('Categories')
  } catch (err) {
    put(AuthActions.loginFailure(true))
  }
}

export function* signup(action) {
  try {
    const {
      data: { token, user }
    } = yield call(api.post, "/users", action.payload);

    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    yield all([
      put(ProfileActions.setProfileData(user)),
      put(AuthActions.loginSuccess({ token }))
    ]);
    navigate('Categories')
  } catch (err) {
    yield put(
      AuthActions.signupFailure(
        err.response ? err.response.data.msg : "UNKNOWN_ERROR"
      )
    );
  }
}
