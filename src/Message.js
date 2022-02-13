/*Name: Sophia Jawort
  HCDE 438
  Component for making a new message object. Takes props
  which is the message object.
  Returns HTML to render the messge on webpage.
*/
import React from "react";

export default function Message(props) {
  return (
    <div
      className="message-row"
      style={{ flexDirection: props.fromMe ? "row-reverse" : "row" }}
    >
      <div className="message">
        <div className="message-username">{props.user}</div>
        <div>{props.text}</div>
        <div className='tail' />
      </div>
    </div>
  );
}