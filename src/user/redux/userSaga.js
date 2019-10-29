import { call, takeEvery, put } from 'redux-saga/effects'
import { apiCall } from '../../core/rest/restClient'
import { LOGIN_USER, SAVE_USER, loginUserSuccess, logOutUserSuccess, LOGOUT_USER, GET_CURRENT_USER, getCurrentUserSuccess } from './userActions'
import { safeRequest } from '../../core/rest/restService';
import { push } from 'connected-react-router';

export function* saveUserSaga(action) {
    const user = yield call(apiCall, '/api/signin', 'POST', {}, action.payload);
    yield put(loginUserSuccess(user.data));
    yield put(push('/'));
}

export function* loginUserSaga(action) {
    console.log(action);
    const user = yield call(apiCall, '/api/login', 'POST', {}, action.payload);
    yield put(loginUserSuccess(user.data));
    yield put(push('/'));
}

export function* logoutUserSaga(action) {
    yield call(apiCall, '/api/logout');
    yield put(logOutUserSuccess(null))
    yield put(push('/'));
}

export function* getCurrentUserSaga(action) {
    const currentUser = yield call(apiCall, '/api/user');
    yield put(getCurrentUserSuccess(currentUser.data));
}

export function* watch() {
    yield takeEvery(`${SAVE_USER}/REQUEST`, safeRequest(saveUserSaga))
    yield takeEvery(`${LOGIN_USER}/REQUEST`, safeRequest(loginUserSaga))
    yield takeEvery(`${LOGOUT_USER}/REQUEST`, safeRequest(logoutUserSaga))
    yield takeEvery(`${GET_CURRENT_USER}/REQUEST`, safeRequest(getCurrentUserSaga))
}