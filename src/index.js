import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let messagesData = [
    {id: 1, name: 'Victor', message:`Hi`},
    {id: 2, name: 'Vasia Pypkin', message: `kyky`},
    {id: 3, name: 'Zinedin Zidan', message: `Hello`},
    {id: 4, name: 'Ronaldo', message: `Hello`},
    {id: 5, name: 'Vasia Pypkin', message: `Hello`},
]

let postData = [
    {id: 1, message: `Hi Victor`, likeCount: 20, },
    {id: 2, message: `Hy`, likeCount: 15, },
    {id: 3, message: `Hky`, likeCount: 1, },
    {id: 4, message: `Hghwjhg jkr`, likeCount: 0, },
    {id: 5, message: `Hwgfl wkj`, likeCount: 11, },
]

ReactDOM.render(<App messagesData={messagesData} postData={postData} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
