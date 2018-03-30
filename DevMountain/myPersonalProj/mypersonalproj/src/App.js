import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import axios from "axios";
import Calendar from "./components/Calendar/Calendar";
import alertForum from "./components/Calendar/alertForum";
import routes from "./routes";
import Dashboard from "./components/Dashboard/Dashboard";
import Carousel from "./components/DemoCarousel/DemoCarousel";

const style = {
  position: "relative",
  margin: "50px auto"
};

class App extends Component {
  onDayClick = (e, day) => {
    alertForum();
  };

  render() {
    return (
      <div>
        <div className="App">
          <Header />
        </div>
        <div className="belowDBoard" style={{ overflowX: "hidden" }}>{routes}</div>
      </div>
    );
  }
}

export default App;
