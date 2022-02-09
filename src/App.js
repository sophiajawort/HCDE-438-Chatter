/*Name: Sophia Jawort
  HCDE 438
  Script for the app. Handles
  sending messages, and rendering
  the messages on the screen.
  Also structures the app.
*/

import './App.css';
import TextInput from "./TextInput"
import NamePicker from "./NamePicker"
import { useState } from "react"
import Message from "./Message"
import Camera from 'react-snap-pic'
import {useDB, db} from './db';

function App() {
  const messages = useDB();
  const [showCamera, setShowCamera] = useState(false)
  let [username, setUsername] = useState("");

  function sendMessage(text){
    if (!text.trim()) return;
    const newMessage = {
      text: text,
      time: Date.now(),
      user: username,
    };
    db.send(newMessage);
  }

  function takePicture(img) {
      console.log(img)
      setShowCamera(false)
    }

  return (
    <div className="App">
      <header className="header">
        <div className="logo" />
        <div className="title">Chatter!</div>
        <NamePicker setUsername={setUsername} name={username}/>
      </header>
      <div className = "messages">
        {messages.map((msg) => {
            return <Message {...msg} />;
        })}
      </div>
      <TextInput sendMessage= {sendMessage} /*we send over sendMessage function to TextInput */
      showCamera= {()=>setShowCamera(true)}/>
      {showCamera && <Camera takePicture={takePicture}/>}
    </div>
  );
}

export default App;
