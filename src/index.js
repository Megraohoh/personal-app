import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Me from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Me />, document.getElementById('root'));
registerServiceWorker();
