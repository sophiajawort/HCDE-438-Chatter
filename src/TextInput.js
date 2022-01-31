/*Name: Sophia Jawort
  HCDE 438
  Script for the input
  section on the webpage.
  Allows user to enter a message,
  and press send.
*/
import React from "react";
import "./TextInput.css";
import { useState } from "react";


function TextInput(props){
    const[text, setText] = useState("")
    function send(){
        props.sendMessage(text)
        setText("")
    }
    function onKeyPress(e){
        if(e.key === "Enter"){
            send()
        }
    }
    return(
      <footer className="footer">
        <input
        className="text-input"
        value= {text}
        onChange= {(e) => setText(e.target.value)}
        onKeyPress = {onKeyPress}
        />
        <button className="send" onClick={send}>
        ↑
        </button>
      </footer>
    );
}

export default TextInput;