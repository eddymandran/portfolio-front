import React from "react";
import cover from "../images/cover.png"
import "../styles/welcome.css"


export default function Welcome() {
  return (
    <div className="Welcome">
      <img align="center" src={cover} alt="html5" />
      <h1>Welcome to my portfolio</h1>
      
    </div>
  );
}
