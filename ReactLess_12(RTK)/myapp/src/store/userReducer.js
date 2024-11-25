import { createAction, createReducer } from "@reduxjs/toolkit"

const initalState = {
    data: [
        {id: 101, firstName: 'Alex', age: 20},
        {id: 102, firstName: 'Steven', age: 25},
        {id: 103, firstName: 'John', age: 30},
    ]
}

export const removeLastUserAction = createAction('REMOVE_LAST_USER')
export const changeYearAction = createAction('CHANGE_YEAR')
export const deleteByIdAction = createAction('DELETE_BY_ID')
export const userListAction = createAction('USER_LIST')

const userReducer = createReducer(initalState, (builder) => {
    builder
        .addCase(removeLastUserAction, (state) => {
            state.data.pop()
        })
        .addCase(changeYearAction, (state) => {
            state.data = state.data.map(el => ({...el, age: 2024 - el.age}))
        })
        .addCase(deleteByIdAction, (state, action) => {
            state.data = state.data.filter(elem => elem.id !== action.payload)
        })
        .addCase(userListAction, (state, action) => {
            state.data = action.payload
        })
})


export default userReducer