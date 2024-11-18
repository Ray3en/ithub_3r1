import { applyMiddleware, combineReducers, createStore } from 'redux'
import { countReducer } from './countReducer'
import { stringReducer } from './stringReducer'
import { usersReducer } from './usersReducer'

import { thunk } from 'redux-thunk'

const rootReducer = combineReducers({
    count: countReducer,
    string: stringReducer,
    users: usersReducer
})

export const store = createStore(
        rootReducer, 
        applyMiddleware(thunk)
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

