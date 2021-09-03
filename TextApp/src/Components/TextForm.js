import React, { useState } from "react";

export default function TextForm(props) {
  //For upper case
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };

  // For lower case
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };

  //To clear the text area
  const clearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  };

  const copyClick = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <div className="mb-3">
          <h3>{props.heading}</h3>
          <textarea
            value={text}
            onChange={handleOnChange}
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "#121212" : "white",
              color: props.mode === "dark" ? "#EDEDED" : "black",
            }}
            id="myBox"
            rows="7"
          ></textarea>
        </div>
        <button
          onClick={handleUpClick}
          className="btn btn-primary mx-2"
        >
          Convert to Uppercase
        </button>
        <button onClick={handleLowClick} className="btn btn-primary mx-2">
          Convert to Lowercase
        </button>
        <button onClick={clearClick} className="btn btn-primary mx-2">
          Clear
        </button>
        <button onClick={copyClick} className="btn btn-primary mx-2">
          Copy
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "#EDEDED" : "black" }}
      >
        <h3>Your Text summary</h3>
        <p>
          {text.split(" ").length - 1} words and {text.length} characters
        </p>
        <p>{0.008 * text.length} Minute required to read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter something in the textbox above"}</p>
      </div>
    </>
  );
}
