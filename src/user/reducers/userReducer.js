import { LOGIN_USER_SUCCESS } from '../actions/actions'

const userReducer = (state = { userType: 'guest' }, action) => {
    switch(action.type) {
        case LOGIN_USER_SUCCESS: {
            return { ...state, ...action.payload,  }
        }
        default: {
            return state
        }
    }
}

export default userReducer