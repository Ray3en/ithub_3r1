
const defaultState = {
    data: [
        {id: 101, firstName: 'Alex', age: 20},
        {id: 102, firstName: 'Steven', age: 25},
        {id: 103, firstName: 'John', age: 30},
    ]
}

const REMOVE_LAST_USER = 'REMOVE_LAST_USER'
const CHANGE_YEAR = 'CHANGE_YEAR'
const DELETE_BY_ID = 'DELETE_BY_ID'
const GET_USER_LIST = 'GET_USER_LIST' 

export function usersReducer(state = defaultState, action){
    switch (action.type){
        case REMOVE_LAST_USER:
            const removedUsers = state.data.slice(0,-1)
            return {...state, data: removedUsers}
        case CHANGE_YEAR: 
            const changedYearUsers = state.data.map(el => ({...el, age: 2024 - el.age}))
            return {...state, data: changedYearUsers}
        case DELETE_BY_ID:
            const deletedUsers = state.data.filter(elem => elem.id !== action.payload)
            return {...state, data: deletedUsers}
        case GET_USER_LIST:
            return {...state, data: action.payload}
    }
    return state
}

export const removeLastUserAction = () => ({type: REMOVE_LAST_USER})
export const changeYearAction = () => ({type: CHANGE_YEAR})
export const deleteByIdAction = (payload) => ({type: DELETE_BY_ID, payload})
export const getUserListAction = (payload) => ({type: GET_USER_LIST, payload})
 