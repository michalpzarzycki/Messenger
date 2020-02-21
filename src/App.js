import React, { useState } from 'react';
import Header from './components/Header'
import Messages from './components/Messages'
import SendMessage from './components/SendMessage'
import './App.css';

function App() {
  const [userName, setUserName] = useState("");
  const [input, setInput] = useState("");

 function handleChange(e) {
   console.log(e.target.value)
   setInput(e.target.value)

   
 }
 function handleSubmit(e) {
console.log("SUBMIT", e.target.value)
setUserName(input)
 }
  return (
    <div className="mainDiv">
      <div className={userName ? "notDisplayed" : "popup" }>
        <div className="popupContent">
          <h1 style={{margin:"0", textAlign:"center"}}>What's your name?</h1>
          <div>
          <input type="text" onChange={handleChange}/>
          <button onClick={handleSubmit}>ENTER</button>
          </div>
       
        </div>
      </div>
     <div className={userName? "messangerWindow" : "notDisplayed"}>
       <Header />
       <Messages />
       <SendMessage />
     </div>
    </div>
  );
}

export default App;
