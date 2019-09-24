const coinReducer = (state = {}, action) => {
    switch(action.type) {
        case 'GET_COINS/SUCCESS': {
            return { coins: action.data }
        }
        default: {
            return state
        }
    }
}

export default coinReducer