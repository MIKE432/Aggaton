import { SAVE_USER } from '../actions/actions'

const userReducer = (state = { userType: 'guest' }, action) => {
    switch(action.type) {
        case SAVE_USER: {
            return { ...state, ...action.payload }
        }
        default: {
            return state
        }
    }
}

export default userReducer