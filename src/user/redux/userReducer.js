const userReducer = (state = { userType: 'guest' }, action) => {
    switch(action.type) {
        case 'LOGIN_USER/SUCCESS': {
            return { ...state, ...action.data,  }
        }
        default: {
            return state
        }
    }
}

export default userReducer