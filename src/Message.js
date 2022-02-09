/*Name: Sophia Jawort
  HCDE 438
  Component for making a new message object.
*/

export default function Message(props) {
    return <div className="message">{props.text}
    <div className="tail"/>
    </div>;
  }