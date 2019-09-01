import { all } from 'redux-saga/effects';
import { watch } from '../../user/sagas/userSaga'

export default function* rootSaga() {
    console.log('rootSaga')
    yield all([
        watch()
    ]);
}