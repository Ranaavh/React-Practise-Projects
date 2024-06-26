import React from "react";

function Heading() {
  const date = new Date();
  const currentTime = date.getHours();

  let greeting;

  const headingstyle = {
    color: "",
  };

  if (currentTime < 12) {
    greeting = "Good Morning";
    headingstyle.color = "red";
  } else if (currentTime < 18) {
    greeting = "Good Afternoon";
    headingstyle.color = "yellow";
  } else {
    greeting = "Good Night";
    headingstyle.color = "green";
  }

  return <h1 style={headingstyle}>{greeting}</h1>;
}

export default Heading;
