import { call, put, all } from "redux-saga/effects";

import api from "~/services/api";
import NavigationService from "~/services/navigation";

import { Creators as AuthActions } from "../ducks/auth";
import { Creators as ProfileActions } from "../ducks/profile";
import { AsyncStorage, Alert } from "react-native";

function alertToAdmin() {
  Alert.alert(
    "Olá admin! Está área é exclusiva para seu cliente",
    "Por favor, acesse a plataforma web com esta conta",
    [{ text: "OK", onPress: () => console.log("OK Pressed") }],
    { cancelable: false }
  );
}

function* persistTokenProfile ({token, profile}) {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;

  yield AsyncStorage.setItem("@Delivery:token", token);
  yield AsyncStorage.setItem(
    "@Delivery:profile",
    JSON.stringify(profile)
  );

  return
}

export function* init() {
  const token = yield call([AsyncStorage, "getItem"], "@Delivery:token");
  const profile = yield call([AsyncStorage, "getItem"], "@Delivery:profile");
  const parsedProfile = yield call([JSON, "parse"], profile);

  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    yield all([
      put(AuthActions.loginSuccess({ token })),
      put(ProfileActions.setProfileData(parsedProfile))
    ]);
  }

  yield put(AuthActions.checkSuccess());
}

export function* login(action) {
  try {
    if (action.payload && !action.payload.email.length && !action.payload.password.length) {
      yield all([
        put(AuthActions.loginFailure(true))
      ]);
      return
    }

    const {
      data: { token, user }
    } = yield call(api.post, "/sessions", action.payload);

    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    yield call([AsyncStorage, "setItem"], "@Delivery:token", token);
    yield call(
      [AsyncStorage, "setItem"],
      "@Delivery:profile",
      JSON.stringify(user)
    );
    // yield call(persistTokenProfile, { token, profile: user })

    if (user.type !== 'admin') {
      yield all([
        put(AuthActions.loginSuccess({ token })),
        put(ProfileActions.setProfileData(user))
      ]);

      NavigationService.navigate("Categories");
      return
    }

    yield all([
      put(AuthActions.loginFailure(true))
    ]);

    alertToAdmin()
  } catch (err) {
    yield all([
      put(AuthActions.loginFailure(true))
    ]);
  }
}

export function* signup(action) {
  try {
    const {
      data: { token, user }
    } = yield call(api.post, "/users", action.payload);

    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    yield call([AsyncStorage, "setItem"], "@Delivery:token", token);
    yield call(
      [AsyncStorage, "setItem"],
      "@Delivery:profile",
      JSON.stringify(user)
    );

    yield all([
      put(ProfileActions.setProfileData(user)),
      put(AuthActions.loginSuccess({ token }))
    ]);

    navigate("Categories");
  } catch (err) {
    yield put(
      AuthActions.signupFailure(
        err.response ? err.response.data.msg : "UNKNOWN_ERROR"
      )
    );
  }
}
