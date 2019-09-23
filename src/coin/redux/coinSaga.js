import { call, takeEvery, put } from 'redux-saga/effects'
import { apiCall } from '../../core/rest/restClient'
import { SAVE_COIN, GET_DATA_FORM, getDataToFormSuccess, saveCoinSuccess } from './coinActions'
import { safeRequest } from '../../core/rest/restService';

export function* saveUserSaga(action) {
    yield call(apiCall, '/api/signin', 'POST', {}, action.payload)
}

export function* saveCoinSaga(action) {
    yield call(apiCall, '/api/coin/new', 'POST', {}, action.payload);
    yield put(saveCoinSuccess())
}

export function* getDataToFormSaga(action) {
    const dataToForm =  yield call(apiCall, '/api/coin/formdata');
    yield put(getDataToFormSuccess(dataToForm.data))
}

export function* watch() {
    yield takeEvery(`${SAVE_COIN}/REQUEST`, safeRequest(saveCoinSaga));
    yield takeEvery(`${GET_DATA_FORM}/REQUEST`, safeRequest(getDataToFormSaga));
}