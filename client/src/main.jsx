
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import './index.css'
import App from './App.jsx'
import AppContextProvider from './context/AppContext.jsx'

createRoot(document.getElementById('root')).render(
  
   <BrowserRouter>
   <AppContextProvider>
    <App />
    <Analytics />
    </AppContextProvider>
   </BrowserRouter>
  
)
