import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider, useDispatch} from 'react-redux'
import {createStore , applyMiddleware , compose} from 'redux'
import thunk from 'redux-thunk'
import reducers from './redux/reducers'

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if(serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    console.log(e.message);
  }
};

const peristedState = loadState();



const store = createStore(
  reducers,
  peristedState,
  compose(applyMiddleware(thunk))
);
store.subscribe(() => {
  saveState(store.getState());
});


  // const store  = createStore(reducers , compose(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

