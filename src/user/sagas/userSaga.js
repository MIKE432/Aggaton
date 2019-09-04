import { call, takeEvery, put } from 'redux-saga/effects'
import { apiCall } from '../../core/rest/restClient'
import { LOGIN_USER, LOGIN_USER_SUCCESS, SAVE_USER, loginUserSuccess } from '../actions/actions'

export function* saveUserSaga(action) {
    yield call(apiCall, '/signin', 'POST', {}, action.payload)
}

export function* loginUser(action) {
    const user = yield call(apiCall, '/login', 'POST', {}, action.payload);
    yield put(loginUserSuccess(user.data))
}



export function* watch() {
    yield takeEvery(SAVE_USER, saveUserSaga)
    yield takeEvery(LOGIN_USER, loginUser)
}