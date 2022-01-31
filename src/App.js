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

function App() {
  const [messages, setMessages] = useState([]);
  function sendMessage(text){
    const newMessage = {
      text
    };
    setMessages([newMessage, ...messages]);
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
      <TextInput sendMessage={sendMessage}/>
    </div>
  );
}

export default App;
