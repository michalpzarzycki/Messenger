import React from 'react';
import Header from './components/Header'
import Messages from './components/Messages'
import SendMessage from './components/SendMessage'
import './App.css';

function App() {
  return (
    <div className="mainDiv">
     <div className="messangerWindow">
       <Header />
       <Messages />
       <SendMessage />
     </div>
    </div>
  );
}

export default App;
