import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import DataProvider from './DataProvider';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <DataProvider>
    <App />
    </DataProvider>
  </StrictMode>
);
