import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './state/rootReducer';
import rootSaga from './sagas/rootSaga';

export default function initStateAndSagas() {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
    sagaMiddleware.run(rootSaga)
    
    //place for initalizing all sagas
    
    return store;
}

