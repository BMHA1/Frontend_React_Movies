import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from 'Auth0/auth0-react'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider domain="moviearts.eu.auth0.com"  
    clienteid="3l2EmKt7reM0KwWych9erljUVIHop4Ok"
     redirectUri={window.Location.origin}>
      <App />
    </Auth0Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
