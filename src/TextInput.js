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
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { FiCamera } from "react-icons/fi";

function TextInput(props){
    const[text, setText] = useState("")
    function send(){
        props.sendMessage(text) /*getting the sendMessage function from the props passed in*/
        setText("")
    }
    function onKeyPress(e){
        if(e.key === "Enter"){
            send()
        }
    }
    return(
      <footer className="footer">
        <button className ="camera-btn" onClick={props.showCamera}>
          <FiCamera className="camera"/>
        </button>
        <input
        className="text-input"
        value= {text}
        onChange= {(e) => setText(e.target.value)}
        onKeyPress = {onKeyPress}
        />
        <button className="send" onClick={send}>
          <BsFillArrowRightCircleFill />
        </button>
      </footer>
    );
}

export default TextInput;