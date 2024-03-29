import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import "./App.css";

export default function NamePicker(props){
    const [name, setName] = useState("")
    const [showInput, setShowInput] = useState(false)

    /* Toggle between a set username and editing username when
    button is pressed */
    function toggle(){
        setShowInput(!showInput)
    }

    /* Setting the username props from app.js */
    function send(){
        props.setUsername(name)
        setShowInput(false)
    }

    if(showInput){
        return(
            <div className = 'name-picker'>
                <input className = "name-input"
                onChange= {(e) => setName(e.target.value)}
                value = {name}
                />
                <button className ="user-button" onClick={send}>
                    OK
                </button>
            </div>
        );
    }
    return(
        <div className="name-picker">
            <span className = 'name-picker-name'> {name || "Set username:"} </span>
            <FiEdit size ='24' onClick= {toggle}/>
        </div>
    );
}


/**
 *             className="input-name"
            value= {editName}
            onChange= {(e) => setEditName(e.target.value)}/>
            <button className ="name-send"
            onClick={send}/>
 */