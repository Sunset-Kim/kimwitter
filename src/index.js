import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from './service/firebase'
console.log(firebase);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

