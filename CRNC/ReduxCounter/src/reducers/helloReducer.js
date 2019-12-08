import { PRESSED_HELLO_BUTTON } from '../actions/types';

const initialState = {
    helloText: 'Hello',
    pressedButton: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case PRESSED_HELLO_BUTTON:
            //* GIVE US whole state except for pressedButton
            //* get pressButton to true
            return { ...state, pressedButton: true, helloText: 'You pressed the button, wow' };
        default:
            return state;
    }
}