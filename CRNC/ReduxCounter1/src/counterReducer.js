//* use types instead of literal values
import { SET_COUNTER, INCREMENT_COUNTER, DECREMENT_COUNTER, CLEAR_COUNTER } from '../actions/types';

//* 0 is appiled when state has no value
//* define initial state and actions
export default (state = 0, action) => {
    switch(action.type) {
        //* case 'INCREMENT':
        case INCREMENT_COUNTER:
            return state + 1; 
        //* case 'DECREMENT':
        case DECREMENT_COUNTER:
            return state - 1;
        //* case 'CLEAR':
        case CLEAR_COUNTER:
            return 0;
        //* case 'SET':
        case SET_COUNTER:
            return action.payload;
        default:
            return state;
    }
}