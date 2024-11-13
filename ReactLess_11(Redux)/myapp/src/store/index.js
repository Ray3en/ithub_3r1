import { combineReducers, createStore } from 'redux'
import { countReducer } from './countReducer'
import { stringReducer } from './stringReducer'

const rootReducer = combineReducers({
    count: countReducer,
    string: stringReducer
})

export const store = createStore(rootReducer)


