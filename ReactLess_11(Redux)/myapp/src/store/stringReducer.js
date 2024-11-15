
const defaultState = {
    value: 'Hello world!',
}

const TEXT_UPDATE = 'TEXT_UPDATE'
const ADD_SPACE = 'ADD_SPACE'
const SLICE_TEXT = 'SLICE_TEXT'

export function stringReducer(state = defaultState, action){
    switch (action.type){
        case TEXT_UPDATE:
            return {...state, value: action.payload}
        case ADD_SPACE:
            return {...state, value: state.value.split('').join(' ')}
        case SLICE_TEXT:
            return {...state, value: state.value[0] + state.value[state.value.length - 1]}
        default:
            return state
    }
}

export const textUpdateAction = (payload) => ({type: TEXT_UPDATE, payload})
export const addSpaceAction = () => ({type: ADD_SPACE})
export const sliceTextAction = () => ({type: SLICE_TEXT})