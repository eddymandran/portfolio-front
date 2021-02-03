import React from "react";
import { Link } from 'react-router-dom';

export default function NavBar() {
  return <div className="navbar">
  <div className="logoNavbar" />
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
    <li>
      <Link to="/admin">Admin</Link>
    </li>
  </ul>
</div>
}
