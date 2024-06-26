import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <div className="container">
      <h1>
        {isSubmitted ? "Submitted" : `Hello ${contact.fName} ${contact.lName}`}
      </h1>
      <p>{contact.email}</p>
      <form onSubmit={submitHandler}>
        <input
          onChange={handleChange}
          name="fName"
          value={contact.fName}
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          name="lName"
          value={contact.lName}
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          name="email"
          value={contact.email}
          placeholder="Email"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
