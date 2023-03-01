import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/reducers';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
