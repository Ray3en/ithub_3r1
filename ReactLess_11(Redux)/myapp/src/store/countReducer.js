
const defaultState = {
    count: 0
}

const RESET = 'RESET'
const INCR_BY_PAYLOAD = 'INCR_BY_PAYLOAD'

export function countReducer(state = defaultState, action){
    switch (action.type){
        case RESET: 
            return {...state, count: 0}
        case INCR_BY_PAYLOAD:
            return {...state, count: state.count + action.payload}
        default:
            return state
    }
}

// Генератор экшена 
// Генератор экшена - это обычная JS функция, которая возвращаеt объект action
// Задача этой функции - упростить запись экшена в диспетчере внутри компонента

export const resetAction = () => ({type: RESET})
export const incrementAction = (payload) => ({type: INCR_BY_PAYLOAD, payload})

// см компонент Count.jsx
// Пример:      disptach(incrementAction(1)) 
