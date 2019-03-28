import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Gallery from './gallery';
import Signup from './signup';
import * as serviceWorker from './serviceWorker';
import Contact from './contact';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Gallery />, document.getElementById('gallery'));
ReactDOM.render(<Contact />, document.getElementById('contact'));
ReactDOM.render(<Signup />, document.getElementById('signup'));
serviceWorker.unregister();
