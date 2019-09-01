import { call, takeEvery } from 'redux-saga/effects'
import { apiCall } from '../../core/rest/restClient'

export function* saveUserSaga(action) {
    yield call(apiCall, '/signin', 'POST', {}, action.payload)
}

export function* watch() {
    yield takeEvery('SAVE_USER', saveUserSaga)
}