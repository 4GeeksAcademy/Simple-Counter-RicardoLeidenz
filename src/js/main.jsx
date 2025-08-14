import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'
// components
import SecondsCounter from './components/SecondsCounter';

 // Variables to track timer and countdown
let timePassed = 0;
let timerOn = true;
let countdown = 0;
let countdownOn = false;
let alert = ""
// Tracks how the button to start and pause looks
let buttonState = {label:"Stop", class:"col-1 btn btn-danger rounded text-center fs-5 p-3 m-2 border border-light"}

const root = ReactDOM.createRoot(document.getElementById('root'));

const changeTimerState = () =>{
  // Changes how the button looks after clicking the button
  if (timerOn){
    timerOn = false;
    buttonState.label = "Resume";
    buttonState.class = "col-1 btn btn-success rounded text-center fs-5 p-3 m-2 border border-light";
  }
  else{
    timerOn = true;
    // If it was activated by the countdown reaching 0 it resets countdown variables and hides the alert
    if (countdownOn){
      countdownOn = false;
      alert = "";
    }
    buttonState.label = "Stop";
    buttonState.class = "col-1 btn btn-danger rounded text-center fs-5 p-3 m-2 border border-light";
  }
}

const setCountdown = (countdownTime) => {
  countdown = countdownTime
  countdownOn = true;
}
// Re renders everything and keeps track of the timer/countdown
const reRender = () => {
  if (timerOn){
    if (countdown == 0){
      timePassed += 1;
    }
    else {
      countdown -= 1;
      timePassed = countdown;
    }
    // When timer reaches 0 after a countdown was initiated the alert variable will turn into an actual alert
    if (countdownOn == true &  countdown == 0){
       alert = <div class="alert alert-warning text-center" role="alert">----Countdown Reached 0----</div>;
       changeTimerState()
    }
  }
  root.render(
  <React.StrictMode>
    {/* Title */}
		<div className="row justify-content-center mt-4">
      <h1 className="col-4 bg-dark rounded text-center text-white p-3 border border-light">Simple Timer Project</h1>
    </div>
    {/* Timer Component */}
		<div className="row justify-content-center">
      <SecondsCounter time={timePassed}/>
    </div>
    {/* Buttons */}
		<div className="row justify-content-center m-4">
      {/* Stop/Resume Button */}
      <button type="button" class={buttonState.class} onClick={changeTimerState}>{buttonState.label}</button>
      {/* Countdown Button */}
      <button type="button" data-bs-toggle="dropdown" class="col-2 btn btn-warning rounded text-center fs-5 p-3 m-2 border border-lightr">Set Countdown</button>
      <div class="input-group">
        <ul class="dropdown-menu">
        {/* ifferent Countdown options */}
          <li><button onClick={() => setCountdown(5)} class="dropdown-item">5</button></li>
          <li><button onClick={() => setCountdown(30)} class="dropdown-item">30</button></li>
          <li><button onClick={() => setCountdown(60)} class="dropdown-item">60</button></li>
        </ul>
      </div>
    </div>
    {/* Alert will only show when activated in reRender() */}
		<div className="row justify-content-center">
      {alert}
    </div>
  </React.StrictMode>,
  )
}

setInterval(reRender, 1000)