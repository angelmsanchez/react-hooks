import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const enhancers: any[] = [];
declare global {
  interface Window { __REDUX_DEVTOOLS_EXTENSION__: any; }
}

if (process.env.NODE_ENV !== 'production') {
  enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}

const composedEnhancers = compose(
  applyMiddleware(thunk),
  ...enhancers
);

export default function configureStore() {
  return createStore(rootReducer, composedEnhancers);
}
