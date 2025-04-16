import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import {cartConfig} from './Store/index.js'

createRoot(document.getElementById('root')).render(
  <Provider store={cartConfig}>
    <App />
  </Provider>,
)
