import React from "react";
import { Link } from 'react-router-dom';
import "../styles/Navbar.css"

export default function NavBar() {
  return <div className="navbar">
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/projects">Projects</Link>
    </li>
    <li>
      <Link to="/aboutme">About Me</Link>
    </li>
    <li>
      <Link to="/contact">Contact</Link>
    </li>
  </ul>
</div>
}
