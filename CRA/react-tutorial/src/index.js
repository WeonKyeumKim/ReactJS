/*
    React 의 property 로써 Component 를 loading 한다.
*/
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
/*
    Bring App.js
*/

/* import App from "./App"; */

/*
    Bring data from URL
    You can view the data with JSON format
*/
import App from "./Api";

/*
    root 로 App 를 render 한다.
*/
ReactDOM.render(<App />, document.getElementById("root"));
