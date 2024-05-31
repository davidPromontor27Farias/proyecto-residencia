import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ResidenciaProyecto } from './ResidenciaProyecto.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ResidenciaProyecto />    
      </BrowserRouter>

    </Provider>


  </React.StrictMode>,
)
