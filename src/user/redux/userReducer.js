const userReducer = (state = { userType: 'guest' }, action) => {
    switch(action.type) {
        case 'LOGIN_USER/SUCCESS': {
            const userType = action.data.isExpert ? 'expert' : 'user';
            return { ...state, ...action.data, userType }
        }
        case 'LOGOUT_USER/SUCCESS': {
            return { userType: 'guest' }
        }
        case 'GET_CURRENT_USER/SUCCESS': {
            if(!action.data.id) {
                return { userType: 'guest' }
            }

            const userType = action.data.isExpert ? 'expert' : 'user';
            return { ...action.data, userType }
        }
        default: {
            return state
        }
    }
}

export default userReducer