// import React from 'react'
import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState("");
//This event will convert text to upper case
  const handleUpClick=()=>{
    console.log("Uppercase was click");
    let newtext=text.toUpperCase();
    setText(newtext);
  }
  const handleLoClick=()=>{
    console.log("Uppercase was click");
    let newtext=text.toLocaleLowerCase();
    setText(newtext);
  }
  const handleClearClick=()=>{
    console.log("Uppercase was click");
    let newtext='';
    setText(newtext);
  }
  const handleOnChange=(event)=>{
    console.log("OnChange was click")
    setText(event.target.value)
  }
  const handleCopy=(event)=>{
    let text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handleSpaces=(event)=>{
    let newtext=text.split(/[ ]+/);
    setText(newtext.join(" "))
  }
  return (
    <div>
    <h1>{props.heading}</h1>
   <div className="form-group">
    <textarea  class="form-control" id="myBox" value ={text} onChange={handleOnChange} rows="8"></textarea>
    <button className="btn btn-primary my-2 mx-1 "onClick={handleUpClick}>Convert to UpperCase</button>
    <button className="btn btn-primary my-2 mx-1 "onClick={handleLoClick}>Convert to LowCase</button>
    <button className="btn btn-primary my-2 mx-1 "onClick={handleClearClick}>ClearText</button>
    <button className="btn btn-primary my-2 mx-1 "onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary my-2 mx-1 "onClick={handleSpaces}>Remove Spaces</button>

  </div>
  <div className="container my-2">
    <h1>Your text summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008*text.split(" ").length} time to read words</p>
    <h2>Preview</h2>
    <p>{text}</p>
  </div>
    </div>
  )
}
