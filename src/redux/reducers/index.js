import { combineReducers } from 'redux'
import auth from './auth'

const reducer = combineReducers({
  auth,
})

const rootReducer = (state, action) => {

  return reducer(state, action)
}
export default rootReducer