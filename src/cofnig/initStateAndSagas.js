    import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './state/rootReducer';

export default function initStateAndSagas() {
    
    const sagaMiddleWare = createSagaMiddleware();
    const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare) );
    console.log('store');
    //place for initalizing all sagas
    
    return store;
}

