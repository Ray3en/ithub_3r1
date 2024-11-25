import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userSlice from './usersSlice'
import userReducer from './userReducer'
// import userReducer from './userReducer'

const rootReducer = combineReducers({
    users: userSlice      //(если используете createSlice )
    // users: userReducer //(если используете createReducer )
})

export const store = configureStore({
    reducer: rootReducer
})