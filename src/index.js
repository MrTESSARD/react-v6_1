// import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import "bootstrap/dist/css/bootstrap.min.css"; ///bootstrap clasic
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; ///react- bootstrap
import "../node_modules/react-bootstrap/dist/react-bootstrap";

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log(root)
root.render(
  // <React.StrictMode>
    <App />
  /* </React.StrictMode> */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
