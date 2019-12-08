import {combineReducers } from 'redux';
import CounterReducer from './counterReducer';
import HelloReducer from './helloReducer';
import helloReducer from './helloReducer';

export default combineReducers({
    counter: CounterReducer,
    hello: helloReducer
});