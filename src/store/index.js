import { createStore, combineReducers, applyMiddleware } from 'redux'
import { counterReducer, countReducer } from './counterReducer/counterReducer'
import thunk from 'redux-thunk'


const reducers = combineReducers({
    count: counterReducer,
    counts: countReducer
})

export const store = createStore(reducers, applyMiddleware(thunk))