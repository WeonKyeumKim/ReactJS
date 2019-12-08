//* use types instead of literal values
import { SET_COUNTER, INCREMENT_COUNTER, DECREMENT_COUNTER, CLEAR_COUNTER } from './types';

export const counterIncrement = () => {
    return {
        //* typs is action.type into counterReducer.js
        //* type: 'INCREMENT'
        type: INCREMENT_COUNTER
    };
}

export const counterDecrement = () => {
    return {
        //* type: 'DECREMENT'
        type: DECREMENT_COUNTER
    }
}
export const counterClear = () => {
    return {
        //* type: 'CLEAR'
        type: CLEAR_COUNTER
    }
}
//* user can type the number to set the initial
export const counterSet = (receivednumber) => {
    return {
        //* type: 'SET',
        type: SET_COUNTER,
        payload: receivednumber
    }
}