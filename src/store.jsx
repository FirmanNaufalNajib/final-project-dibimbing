import { createStore, combineReducers } from 'redux';
import modalReducer from './features/modalSlice'
//import {composeWithDevTools} from '@redux-devtools/extension'

const rootReducer = combineReducers({
  modal: modalReducer
})

const store = createStore(rootReducer)

export default store
