import { call, put } from 'redux-saga/effects';
import { logOutUser } from '../../user/redux/userActions';

const safe = (saga, ...options) => function* (action) {
    try {
        yield call(saga, ...options, action);
    } catch(err) {
        yield call(errorSaga, ...options, err, action);
    }
}


export function* errorSaga(error, action) {
    const response = error.response;

    if(response && response.status === 401 && action.type !== 'LOGIN_USER/REQUEST' ) {
        yield put(logOutUser());
    } else {
        yield;
    }
}

export const safeRequest = (saga, ...options) => safe(saga, ...options);