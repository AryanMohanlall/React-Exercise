import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { VideoProvider } from './providers/VideoProvider/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <VideoProvider>
      <App />
    </VideoProvider>
    </BrowserRouter>
  </StrictMode>,
)
