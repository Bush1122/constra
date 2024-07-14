
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ScrollProvider } from './pages/ScrollContext'

ReactDOM.render(
  <ScrollProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ScrollProvider>,
  document.getElementById('root')
);
reportWebVitals();

