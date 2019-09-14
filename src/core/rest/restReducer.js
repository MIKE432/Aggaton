const restReducer = (state = { fetching: false, error: false }, action) => {
        if(action.type.endsWith('REQUEST')) {
            return { ...state, fetching: true }
        } else if(action.type.endsWith('SUCCESS')) {
            return { ...state, fetching: false, [action.baseType] : action.data }
        } else {
            return state;
        }
}


export default restReducer