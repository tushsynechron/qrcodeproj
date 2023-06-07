import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './stores';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { AzureAD } from 'react-aad-msal';
import {authProvider} from './configurations/authProvider'

const store = createStore(
    rootReducer,
    window?._REDUX_DEVTOOLS_EXTENSION_ && window?._REDUX_DEVTOOLS_EXTENSION_() 
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AzureAD provider={authProvider} forceLogin={true}>
  <Provider store={store}><App /></Provider>
  </AzureAD>
);
reportWebVitals();