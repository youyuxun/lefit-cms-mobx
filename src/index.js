import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import AppStore from './stores/AppStore'

const appStore = new AppStore()

ReactDOM.render(<App appStore={appStore} />, document.getElementById('root'));
registerServiceWorker();
