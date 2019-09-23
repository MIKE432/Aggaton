const userReducer = (state = { userType: 'guest' }, action) => {
    switch(action.type) {
        case 'LOGIN_USER/SUCCESS': {
            const userType = action.data.isExpert ? 'expert' : 'user';
                        console.log(action)
            return { ...state, ...action.data, userType }
        }
        case 'LOGOUT_USER/SUCCESS': {
            console.log('action.payload');
            return { userType: 'guest' }
        }
        default: {
            return state
        }
    }
}

export default userReducer