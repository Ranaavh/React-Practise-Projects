import React from "react";
import Form from "./Form";

var userIsRegistered = true; // set false to see Confirm Password and Register button







function App() {
  return (
    <div className="container">
      <Form isRegistered={userIsRegistered}/>
    </div>
  );
}

export default App;
