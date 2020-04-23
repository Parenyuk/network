import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state from './redux/Store'
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from './redux/ReduxStore'

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App state={state} dispatch={store.dispatch.bind(store)}/>
            </Provider>
        </BrowserRouter>, document.getElementById('root'));
}
rerenderEntireTree(state);





// <App state={state} dispatch={store.dispatch.bind(store)}
//      store={store} />

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
