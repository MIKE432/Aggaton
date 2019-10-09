import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import userReducer from '../../user/redux/userReducer'; 
import restReducer from '../../core/rest/restReducer';
import coinReducer from '../../coin/redux/coinReducer'

export default function(history) {
    
    const allReducers = combineReducers({
        router: connectRouter(history),
        user: userReducer,
        rest: restReducer,
        coin: coinReducer
    })

    return function rootReducer(state = {}, action) {
        return allReducers(state, action)
    }
}