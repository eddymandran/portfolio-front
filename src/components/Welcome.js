import React from "react";
import cover from "../images/cover.png"
import "../styles/welcome.css"


export default function Welcome() {
  return (
    <div className="Welcome">
      <img align="center" src={cover} alt="html5" />
      <p>Welcome to my portfolio</p>
      
    </div>
  );
}
