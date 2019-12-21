const userReducer = (state = { userType: 'guest', loginFailed: false }, action) => {
    switch(action.type) {
        case 'LOGIN_USER/SUCCESS': {
            const userType = action.data.isExpert ? 'expert' : 'user';
            return { ...state, ...action.data, userType }
        }
        case 'LOGOUT_USER/SUCCESS': {
            return { ...state, userType: 'guest' }
        }
        case 'GET_CURRENT_USER/SUCCESS': {
            if(!action.data.id) {
                return { ...state, userType: 'guest', loginFailed: false }
            }

            const userType = action.data.isExpert ? 'expert' : 'user';
            return { ...action.data, userType }
        }
        case 'IS_LOGIN_FAILED': {
            return { ...state, loginFailed: action.data }
        }

        default: {
            return state
        }
    }
}

export default userReducer