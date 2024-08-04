import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './HomePage.jsx'
import MenuTop from './Componenti/Navbar'
import './index.css'
import Scelta_Route from './Router'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('homePage')).render(
  <React.StrictMode>
    
    <BrowserRouter>
    <MenuTop />  
      <Scelta_Route />
    </BrowserRouter>
  </React.StrictMode>
)

