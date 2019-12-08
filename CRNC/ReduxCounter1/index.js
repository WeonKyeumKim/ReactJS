/** @format */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
//*import App from './App';
//*AppRegistry.registerComponent(appName, () => App);

//*add
import App from './src/app';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

//* assign state and actions in counterReducer.js 
//* to reducer
import reducer from './src/reducers/counterReducer';
//* createStore of redux makes reducer to store
const store = createStore(reducer);

const AppContainer = () => 
    //* assign store to Provider
    <Provider store={store}>
        <App/>
    </Provider>

AppRegistry.registerComponent(appName, () => AppContainer);
