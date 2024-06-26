import React ,{ useState } from "react";

function App() {

const now=new Date().toLocaleTimeString('en-US', { hour12: false });;

const [time,setTime]=useState(now);


function updateTime(){
   
const newtime=new Date().toLocaleTimeString('en-US', { hour12: false });
  setTime(newtime);
}



  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
