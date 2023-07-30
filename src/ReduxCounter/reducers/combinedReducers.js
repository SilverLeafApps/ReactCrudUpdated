import currentUser from './userReducer'
import counter from './counterReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    currentUser,
    counter
})

export default rootReducer