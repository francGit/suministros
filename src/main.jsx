import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './fonts/noir/NoirPro-Bold.ttf';
import './fonts/noir/NoirPro-SemiBold.ttf';
import './fonts/noir/NoirPro-Heavy.ttf';
import './fonts/tahoma/Tahoma.ttf';
import './fonts/tahoma/Tahoma-Bold.ttf';
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
