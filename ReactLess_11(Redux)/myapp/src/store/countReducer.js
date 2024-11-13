
const defaultState = {
    count: 0
}

export function countReducer(state = defaultState, action){
    switch (action.type){
        // case "INCREMENT": 
        //     return {...state, count: state.count + 1}
        // case "DECREMENT": 
        //     return {...state, count: state.count - 1}
        // case "INCR_100": 
        //     return {...state, count: state.count + 100}
        // case "DECR_100": 
        //     return {...state, count: state.count - 100}
        case "RESET": 
            return {...state, count: 0}
        case "INCR_BY_PAYLOAD":
            return {...state, count: state.count + action.payload}
        default:
            return state
    }
}
