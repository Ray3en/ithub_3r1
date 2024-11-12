import { createStore } from 'redux'

const defaultState = {
    count: 0,
}

function reducer(state = defaultState, action){
    return state
}


export const store = createStore(reducer)