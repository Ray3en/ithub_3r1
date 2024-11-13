
const defaultState = {
    value: 'Hello world!'
}

export function stringReducer(state = defaultState, action){
    switch (action.type){
        case "TEXT_UPDATE":
            return {...state, value: action.payload}
        default:
            return state
    }
}
