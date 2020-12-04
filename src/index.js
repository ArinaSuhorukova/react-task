import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {Provider} from 'react-redux'

import App from './App';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';
import {applyMiddleware, compose, createStore} from "redux";
import {reducer} from "./redux/reducer";

let middleware = [thunk];
let enhancers = [applyMiddleware(...middleware)];

if (process.env.NODE_ENV === 'development') {
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}
const store = createStore(reducer, compose(...enhancers));
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

