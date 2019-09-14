import { combineReducers } from 'redux';
import userReducer from '../../user/redux/userReducer'; 
import restReducer from '../../core/rest/restReducer';

const rootReducer = combineReducers({
    user: userReducer,
    rest: restReducer
})

export default rootReducer 