import { combineReducers } from 'redux';
import userReducer from '../../user/redux/userReducer'; 
import restReducer from '../../core/rest/restReducer';
import { connectRouter } from 'connected-react-router';

export default function(history) {
    
    const allReducers = combineReducers({
        router: connectRouter(history),
        user: userReducer,
        rest: restReducer
    })

    return function rootReducer(state = {}, action) {
        return allReducers(state, action)
    }
}