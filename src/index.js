import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App,Header,Body } from './pages';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<React.StrictMode>
  <Body />
</React.StrictMode>, document.getElementById("body"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
