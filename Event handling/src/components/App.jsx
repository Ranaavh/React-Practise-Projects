import React, { useState } from "react";
import Form from "./Form";

function App() {
  const [heading, setHeading] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);

  function handleClick() {
    setHeading("Submitted");
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <form>
        <h1>{heading}</h1>
        <Form />
        <button
          style={{ backgroundColor: isMouseOver ? "black" : "white" }}
          onClick={handleClick}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
      
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
