import React, { Component } from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import "./Home.css";
import moment from "moment";
import Time from "../TIme/Time";
import Carousel from "../DemoCarousel/DemoCarousel";

export default class Home extends Component {
  handleLogin() {
    window.location.href = "http://localhost:3001/auth";
  }

  render() {
    return (
      <div>
        <div className="carDiv">
          <Carousel /> <br />
          <br />
        </div>
        <div className="headerTwo" style={{ alignContent: "center" }}>
          <h2>
            {/* <h1> Home </h1> */} The day you start achieving your goals:{" "}
            <p className="Time">
              <Time />
            </p>
          </h2>{" "}
          <div className="loginDiv">
            <a href={process.env.REACT_APP_LOGIN}>
              <button
                className="loginbutton"
                onClick={() => {
                 this.handleLogin();
                }}
              >
                LOGIN
              </button>
            </a>
          </div>
        </div>
        <br />
        )
      </div>
    );
  }
}
