import React from 'react';
import ReactDOM from 'react-dom';
import { Provider }  from 'react-redux';
import  reduxThunk  from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import style from './style.css';
import App from './components/App';
import reducers from './reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;   //Para poder usar redux devtools

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(reduxThunk))
    );

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
    );