/*Name: Sophia Jawort
  HCDE 438
  Script for the app. Handles
  sending messages, and rendering
  the messages on the screen.
  Also structures the app.
*/

import './App.css';
import TextInput from "./TextInput"
import { useState } from "react";
import Message from "./Message"
import Camera from 'react-snap-pic'

function App() {
  const [messages, setMessages] = useState([]);
  const [showCamera, setShowCamera] = useState(false)
  function sendMessage(text){
    const newMessage = {
      text
    };
    setMessages([newMessage, ...messages]);
  }
    let takePicture  = (img) => {
      console.log(img)
      setShowCamera(false)
    }

  return (
    <div className="App">
      <header className="header">
        <div className="logo" />
        <div className="title">Chatter!</div>
      </header>
      <div className = "messages">
        {messages.map((msg) => {
            return <Message {...msg} />;
        })}
      </div>
      <TextInput sendMessage= {sendMessage}
      showCamera= {()=>setShowCamera(true)}/>
      {showCamera && <Camera takePicture={takePicture}/>}
    </div>
  );
}

export default App;
