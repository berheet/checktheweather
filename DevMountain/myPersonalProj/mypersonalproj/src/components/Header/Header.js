import React from "react";
import "./Header.css";
import App from "../../App";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="headerDiv">
      <div>
        <ul className="Nav">
          <li className="navDiv">
            {" "}
            <a href="/Exercises" className="headerA">
              <strong>Exercises</strong>{" "}
            </a>
          </li>
          <li className="navDiv">
            {" "}
            <a href="/Shop" className="headerA">
              <strong>Shop</strong>{" "}
            </a>
          </li>
          <li className="navDiv">
            {" "}
            <a href="/About" className="headerA">
              <strong>About</strong>{" "}
            </a>
          </li>
          <li className="navDiv">
            {" "}
            <a href="/Contact" className="headerA">
              <strong>Contact Us</strong>{" "}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
