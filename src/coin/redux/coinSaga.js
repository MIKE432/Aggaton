import { call, takeEvery, put } from 'redux-saga/effects'
import { apiCall } from '../../core/rest/restClient'
import { SAVE_COIN,
     GET_DATA_FORM, 
     getDataToFormSuccess, 
     saveCoinSuccess,
     getExpertCoinsSuccess,
     GET_COINS, 
     getCoinsSuccess, 
     GET_COIN, 
     GET_EXPERT_COINS } from './coinActions'
import { safeRequest } from '../../core/rest/restService';

export function* saveCoinSaga(action) {
    const response = yield call(apiCall, '/api/coin/new', 'POST', {}, action.payload.values);
    yield call(apiCall, `/api/coin/${response.data.id}/averse`, 'POST', {}, action.payload.averse);
    yield call(apiCall, `/api/coin/${response.data.id}/reverse`, 'POST', {}, action.payload.reverse);
    
    yield put(saveCoinSuccess())
}

export function* getDataToFormSaga(action) {
    const dataToForm =  yield call(apiCall, '/api/coin/formdata');
    yield put(getDataToFormSuccess(dataToForm.data))
}

export function* getCoinsSaga(action) {
    const coins = yield call(apiCall, '/api/coin');
    yield put(getCoinsSuccess(coins.data));
}

export function* getExpertCoinsSaga(action) {
    const coins = yield call(apiCall, '/api/expertcoins');
    yield put(getExpertCoinsSuccess(coins.data));
}

export function* watch() {
    yield takeEvery(`${SAVE_COIN}/REQUEST`, safeRequest(saveCoinSaga));
    yield takeEvery(`${GET_DATA_FORM}/REQUEST`, safeRequest(getDataToFormSaga));
    yield takeEvery(`${GET_COINS}/REQUEST`, safeRequest(getCoinsSaga));
    yield takeEvery(`${GET_EXPERT_COINS}/REQUEST`, safeRequest(getExpertCoinsSaga));
}