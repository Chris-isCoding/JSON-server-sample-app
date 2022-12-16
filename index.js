import React from 'react';
import { createRoot } from 'react-dom/client';
import './src/style/main.css';
import App from './src/App.jsx';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
