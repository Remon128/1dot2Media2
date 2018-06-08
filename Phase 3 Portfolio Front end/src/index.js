import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import '..n/node_modules/bootstrap/dist/css/bootstrap.min.css';

//import Test from './Test';
import Logos from './Part/logos.js'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));
//ReactDOM.render(<Logos/>, document.getElementById('logos'));


registerServiceWorker();
