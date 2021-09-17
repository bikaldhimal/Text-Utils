import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // Note: Strict mode is turned on here so that we won't have any bugs in future
  // Note yaha tall <App /> component xa tyo jasto dekhinxa hamro site ni testae dekhinxa
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root') // vannu ko matlab k ho vaney jaha index.html file vitra root vanney Id vetinxa tyaha gaera App component laii haal vanya ho 
);


reportWebVitals();
