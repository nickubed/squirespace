import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { App } from './content/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// really cool comments! I've contributed so much to this repository.
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
