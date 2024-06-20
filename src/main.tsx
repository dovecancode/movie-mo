import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'

import { FilmProvider } from './contexts/useFilmContext.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FilmProvider>
      <App />
    </FilmProvider>
  </React.StrictMode>
)
