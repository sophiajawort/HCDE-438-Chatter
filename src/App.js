import logo from './logo.svg';
import './App.css';
import TextInput from "./TextInput"
import { useState } from "react";

function App() {
  const [messages, setMessages] = useState([]);
  function sendMessage(msg){
    setMessages([...messages, msg])
    console.log(messages)
  }
  return (
    <div className="App">
      <header className="header">
        <img className="logo" alt= "cat screaming to represent chatter logo" />
        <div className="title">Chatter!</div>
      </header>
      <div className = "messages">
        {messages.map((msg) => {
          return <div className = "message"> {msg}
          </div>
        })}
      </div>
      <TextInput sendMessage={sendMessage}/>
    </div>
  );
}

export default App;
