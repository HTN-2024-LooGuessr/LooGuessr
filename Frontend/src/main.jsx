import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter } from "react-router-dom";
//hard code for coordinates
localStorage.setItem("index", "true");

createRoot(document.getElementById('root')).render(
    <HashRouter>
        <App />
    </HashRouter>,
)
