import { applyMiddleware, combineReducers, createStore } from 'redux'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { countReducer } from './countReducer'
import { stringReducer } from './stringReducer'
import { usersReducer } from './usersReducer'

import { thunk } from 'redux-thunk'

const persistCinfig = {
    key: 'root',
    // blacklist: ['count', 'string', '_persist'],
    blacklist: ['_persist'],
    whitelist: ['users'],
    storage
}

const rootReducer = combineReducers({
    count: countReducer,
    string: stringReducer,
    users: usersReducer
})

const persistedReducer = persistReducer(persistCinfig, rootReducer)

export const store = createStore(
        persistedReducer, 
        applyMiddleware(thunk)
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export const persist = persistStore(store)
