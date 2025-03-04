// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/App.css';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
