
import {counterReducer} from '../reducers'
import { combineReducers } from "redux"
import { createStore } from 'redux';

const rootReducer = combineReducers({counter : counterReducer})
export const store = createStore(rootReducer)