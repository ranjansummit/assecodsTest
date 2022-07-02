import { createStore } from 'redux'
import loginReducer from './loginApp'

const store = createStore(loginReducer)

export default store
