import { call, takeEvery, put } from 'redux-saga/effects'
import { apiCall } from '../../core/rest/restClient'
import { LOGIN_USER, SAVE_USER, loginUserSuccess } from './userActions'
import { safeRequest } from '../../core/rest/restService';

export function* saveUserSaga(action) {
    yield call(apiCall, '/api/signin', 'POST', {}, action.payload)
}

export function* loginUser(action) {
    const user = yield call(apiCall, '/api/login', 'POST', {}, action.payload);
    yield put(loginUserSuccess(user.data));
}

export function* watch() {
    yield takeEvery(`${SAVE_USER}/REQUEST`, safeRequest(saveUserSaga))
    yield takeEvery(`${LOGIN_USER}/REQUEST`, safeRequest(loginUser))
}