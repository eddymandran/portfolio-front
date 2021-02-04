import React from "react";
import eddy from "../images/eddy.png"
import computers from "../images/hero.svg"
import "../styles/welcome.css"


export default function Welcome() {
  return (
    <div className="welcome">

      
      <h1>Junior front end developer</h1>
      <img className="eddy" align="center" src={eddy} alt="Eddy MANDRAN" />
      <img className="computers" align="center" src={computers} alt="computers" />
      <div className="ground"></div>
    </div>
  );
}
