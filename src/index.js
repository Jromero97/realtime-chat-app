import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import IndexPage from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<IndexPage/>, document.getElementById('root'));
registerServiceWorker();
