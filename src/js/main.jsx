import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'
// components
import Home from './components/Home';

let timePassed = 0
const root = ReactDOM.createRoot(document.getElementById('root'))
const reRender = () => {
  timePassed += 1
  root.render(
  <React.StrictMode>
    <Home time={timePassed}/>
  </React.StrictMode>,
  )
}

setInterval(reRender, 1000)

