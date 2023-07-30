import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//import {createStore} from 'redux'
//import {legacy_createStore} from 'redux'
import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './ReduxCounter/reducers/combinedReducers'
import {Provider} from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<App />);

//const store = legacy_createStore(
//    rootReducer
//)

const store = configureStore(
  {reducer:rootReducer}
)

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

