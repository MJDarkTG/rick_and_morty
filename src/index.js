import React from 'react'
// import ReactDOM from 'react-dom' //anterior
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
//*---------------------
//anterior por defecto
//------------------------
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>    
  </React.StrictMode>


)
