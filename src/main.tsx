import React from 'react'
import ReactDOM from 'react-dom/client'
import { configureClient } from './api/client';
import App from './App'
import './index.css'
import storage from './utils/storage';

const accessToken = storage.get('auth');
configureClient({ accessToken });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App isInitiallyLogged={!!accessToken} />
  </React.StrictMode>
)
