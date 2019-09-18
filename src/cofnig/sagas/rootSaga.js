import { all } from 'redux-saga/effects';
import { watch as userSaga } from '../../user/redux/userSaga';
import { watch as coinSaga } from '../../coin/redux/coinSaga';

export default function* rootSaga() {
    yield all([
        coinSaga(),
        userSaga()
    ]);
}