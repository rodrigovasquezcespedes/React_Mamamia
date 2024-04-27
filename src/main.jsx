import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { PizzaProvider } from './context/PizzaContext'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PizzaProvider>
      <Router>
        <App />
      </Router>
    </PizzaProvider>
  </React.StrictMode>
)
