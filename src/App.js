import { useState, useRef, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [message, setMessage] = useState("");
  const downdivRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of downdiv whenever the message changes
    if (downdivRef.current) {
      downdivRef.current.scrollTop = downdivRef.current.scrollHeight;
    }
  }, [message]); // The effect runs whenever the message changes

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input
        type="text"
        placeholder="Type your message here"
        value={message} // Bind the value of the input to the state
        onChange={handleInputChange} // Update the state on input change
      />
      <h2>Start editing to see some magic happen!</h2>
      <div className="downdiv" ref={downdivRef}>
        {/* Display dynamic content */}
        <p>Additional content to make the div scrollable</p>
        <p>More content as message changes...</p>
        <p>Keep typing to see scroll</p>
        <p>Scroll me, I am becoming long</p>
        <p>Scroll me, I am becoming long</p>
        <p>Scroll me, I am becoming long</p>
        <p>Scroll me, I am becoming long</p>
        <p>Scroll me, I am becoming long</p>
        <p>Scroll me, I am becoming long</p>
        <p>Scroll me, I am becoming long</p>
        <p>Scroll me, I am becoming long</p>
        <p className="scrollcontent">Hii this is {message} dev</p>
      </div>
    </div>
  );
}
