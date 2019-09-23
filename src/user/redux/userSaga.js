import { call, takeEvery, put } from 'redux-saga/effects'
import { apiCall } from '../../core/rest/restClient'
import { LOGIN_USER, SAVE_USER, loginUserSuccess, logOutUserSuccess, LOGOUT_USER } from './userActions'
import { safeRequest } from '../../core/rest/restService';
import { push } from 'connected-react-router';

export function* saveUserSaga(action) {
    yield call(apiCall, '/api/signin', 'POST', {}, action.payload);
    yield push('/coin/new');
}

export function* loginUserSaga(action) {
    const user = yield call(apiCall, '/api/login', 'POST', {}, action.payload);
    yield put(loginUserSuccess(user.data));
    yield put(push('/coin/new'));
}

export function* logoutUserSaga(action) {
    yield call(apiCall, '/api/logout');
    yield put(logOutUserSuccess(null))
    yield put(push('/'));
}

export function* watch() {
    yield takeEvery(`${SAVE_USER}/REQUEST`, safeRequest(saveUserSaga))
    yield takeEvery(`${LOGIN_USER}/REQUEST`, safeRequest(loginUserSaga))
    yield takeEvery(`${LOGOUT_USER}/REQUEST`, safeRequest(logoutUserSaga))
}