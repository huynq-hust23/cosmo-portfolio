import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import ThemeToaster from '@/lib/themeToaster'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ThemeToaster />
  </StrictMode>
)
