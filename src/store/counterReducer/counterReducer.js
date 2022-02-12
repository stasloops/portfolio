const COUNT_INCREMENT = 'counter/incremented'
const COUNT_DECREMENT = 'counter/decremented'
const ADD_FETCH = 'add/fetch'

const defaulState = {
    cust: []
}
const defaultState = {
    value: 1
}

export function counterReducer(state = defaulState, action) {
    switch (action.type) {
        case ADD_FETCH:
            return {...state, cust: [...state.cust, action.payload]}
      default:
        return state
    }
}

export function countReducer(state = defaultState, action) {
    switch (action.type) {
      case COUNT_INCREMENT:
        return {...state, value: state.value = action.payload }
      case COUNT_DECREMENT:
        return { value: state.value - 1 }
      default:
        return state
    }
}
export const addFetch = (payload) => ({type: ADD_FETCH, payload})
export const countIncrement = (payload) => ({type: COUNT_INCREMENT, payload})
export const countDecrement = () => ({type: COUNT_DECREMENT})

