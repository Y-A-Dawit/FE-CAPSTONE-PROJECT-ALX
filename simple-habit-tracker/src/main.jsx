import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'
import './index.css'; // it will apply the style across the entire react app

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


