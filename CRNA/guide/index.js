import { AppRegistry } from 'react-native';
import App from './src/app';
import React from 'react';
import { Provider } from 'react-redux';

//* Authorizer
const AppContainer = () => 
//* only 1 provider tag surround yopur whole app
    <Provider>
        <App/>
    </Provider>

//* original
//* AppRegistry.registerComponent("reduxlearningstarter", () => App);

//* change for redux
AppRegistry.registerComponent("reduxlearningstarter", () => AppContainer);