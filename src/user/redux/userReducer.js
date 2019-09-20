const userReducer = (state = { userType: 'guest' }, action) => {
    switch(action.type) {
        case 'LOGIN_USER/SUCCESS': {
            console.log(action.data);
            const userType = action.data.isExpert ? 'expert' : 'user';
            return { ...state, ...action.data, userType }
        }
        default: {
            return state
        }
    }
}

export default userReducer