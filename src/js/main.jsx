import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'
// components
import SecondsCounter from './components/SecondsCounter';

let timePassed = 0;
let timerState = true;
let buttonState = {label:"Stop", class:"col-1 btn btn-danger rounded text-center fs-5 p-3 m-2 border border-light"}

const root = ReactDOM.createRoot(document.getElementById('root'));

const changeTimerState = () =>{
  if (timerState){
    timerState = false;
    buttonState.label = "Resume";
    buttonState.class = "col-1 btn btn-success rounded text-center fs-5 p-3 m-2 border border-light";
  }
  else{
    timerState = true;
    buttonState.label = "Stop";
    buttonState.class = "col-1 btn btn-danger rounded text-center fs-5 p-3 m-2 border border-light";
  }
}

const reRender = () => {
  if (timerState){
    timePassed += 1
  }
  root.render(
  <React.StrictMode>
		<div className="row justify-content-center mt-4">
      <h1 className="col-4 bg-dark rounded text-center text-white p-3 border border-light">Simple Timer Project</h1>
    </div>
		<div className="row justify-content-center">
      <SecondsCounter time={timePassed}/>
    </div>
		<div className="row justify-content-center m-4">
      <button type="button" class={buttonState.class} onClick={changeTimerState}>{buttonState.label}</button>
      <button type="button" class="col-2 btn btn-warning rounded text-center fs-5 p-3 m-2 border border-lightr">Set Countdown</button>
    </div>
  </React.StrictMode>,
  )
}

setInterval(reRender, 1000)

