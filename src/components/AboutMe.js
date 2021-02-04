import React from "react";
import HTML5 from "../images/HTML-5.svg"
import CSs3 from "../images/CSS-3.svg"
import JavaScript from "../images/JavaScript.svg"
import reactjs from "../images/reactjs.svg"
import NodeJS from "../images/Node-JS.svg"
import expressjs from "../images/expressjs.svg"
import Git from "../images/Git.svg"

export default function AboutMe() {
  return <div>
    <div>
    <h2 align="center">  HI, I'm Eddy. Nice to meet you.</h2>
      <ul>
        <li>- 🌍 I’m from Lyon (FRANCE) </li>
        <li>- 🌱 I’m currently learning NodeJS,ExpressJS, VueJS, Symphony  </li>
        <li>- 🤝 I’m looking for tips on how to become
      web developper </li>
        <li>👨‍🦱 💻 All of my projects will be available soon </li>
         <li> - 💬 Let's talk about web development, JavaScript, design, UI/UX and
      more... </li>
      <li>- 📫 How to reach me dev.eddy.mandran@gmail.com </li>
      </ul>

      
      <p align="center">
        <img src={HTML5} alt="html5" width="60" height="60" />
        <img src={CSs3} alt="css3" width="60" height="60" />
        <img
          src={JavaScript}
          alt="javascript"
          width="60"
          height="60"
        />
        <img src={reactjs} alt="react" />
        <img src={NodeJS} alt="nodejs" height="60" />
        <img src={expressjs} alt="express" height="60" />
        <img src={Git} alt="git" height="60" />
      </p>
    </div>
  </div>;
}
