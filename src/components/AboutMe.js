import React from "react";
import "../styles/AboutMe.css";
import HTML5 from "../images/HTML-5.svg";
import CSs3 from "../images/CSS-3.svg";
import JavaScript from "../images/JavaScript.svg";
import reactjs from "../images/reactjs.svg";
import NodeJS from "../images/Node-JS.svg";
import expressjs from "../images/expressjs.svg";
import Git from "../images/Git.svg";

export default function AboutMe() {
  return (
    <div className="aboutMe">
      <div>
        <h2 align="center"> HI, I'm Eddy. Nice to meet you.</h2>
        <div className="resume">
          <ul>
            <li>- 🌍 I’m from <em>Lyon (FRANCE)</em> </li>
            <li>
              - I’m currently learning <em>NodeJS,ExpressJS, VueJS, Symphony{" "}
              </em> 🌱</li>
            <li>- 🤝 I’m looking for tips on how to become a good web developper </li>
            <li>
              - Let's talk about web development, JavaScript, design, UI/UX
              and more... 💬
            </li>
            <li>- 📫 How to reach me <em>dev.eddy.mandran@gmail.com</em> </li>
          </ul>
        </div>
      </div>

      <div className="language">
        
          <img className="languageImg" src={HTML5} alt="html5" />
        
        
          <img className="languageImg" src={CSs3} alt="css3" />
        
        
          <img className="languageImg" src={JavaScript} alt="javascript" />
        
        
          <img className="languageImg" src={reactjs} alt="react" />
        
      
          <img className="languageImg" src={NodeJS} alt="nodejs" />
        
        
          <img className="languageImg" src={expressjs} alt="express" />
        
        
          <img className="languageImg" src={Git} alt="git" />
      
      </div>
    </div>
  );
}
