import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [
        {id: 101, firstName: 'Alex', age: 20},
        {id: 102, firstName: 'Steven', age: 25},
        {id: 103, firstName: 'John', age: 30},
    ]
}

const userSlice = createSlice({
    name: 'users',
    initialState, 
    reducers: {
        removeLastUser(state){
            state.data.pop()
        },
        changeYear(state){
            state.data = state.data.map(el => ({...el, age: 2024 - el.age}))
        },
        deleteById(state, action){
            state.data = state.data.filter(elem => elem.id !== action.payload)
        },
        userList(state, action){
            state.data = action.payload
        }
    }
})

export default userSlice.reducer

export const {
    removeLastUser, 
    changeYear, 
    deleteById, 
    userList
} = userSlice.actions
