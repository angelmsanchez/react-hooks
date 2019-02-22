import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { StoreContext } from 'redux-react-hook';

import './index.css';
import App from './components/App';
import store from './store/store';

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreContext.Provider>
  , document.getElementById('root'));

    // CONFIG SERVICE WORKER
    // import * as serviceWorker from './serviceWorker';
    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: http://bit.ly/CRA-PWA
    // serviceWorker.unregister();
