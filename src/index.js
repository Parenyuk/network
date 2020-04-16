import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './redux/Store'
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import  {Provider} from './StoreContext'


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App state={state} dispatch={store.dispatch.bind(store)}
                     store={store} />
            </Provider>


        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(store.getState());

store.subscibe( () => {
    let state = store.getState();
    rerenderEntireTree(state);
});

// <App state={state} dispatch={store.dispatch.bind(store)}
//      store={store} />

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
