import React from "react";
import "./Navbar.scss";
import logo from "../../logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo Images"></img>

      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">
            Home
          </a>
        </li>

        <li>
          <a href="/" className="nav-link">
            About
          </a>
        </li>

        <li>
          <a href="/" className="nav-link active">
            Tours
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            Contact Us
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            Plan Journey
          </a>
        </li>
      </ul>
    </nav>
  );
}
