import { all } from 'redux-saga/effects';
import { watch } from '../../user/redux/userSaga'

export default function* rootSaga() {
    console.log('rootSaga')
    yield all([
        watch()
    ]);
}