import React, { Component } from "react";
import { Browser as Router, Route, Link, Switch } from "react-router-dom";
import ProfileSettings from "./components/ProfileSettings/ProfileSettings";
import Profile from "./components/Profile/Profile";
import FoodLog from "./components/FoodLog/FoodLog";
import Exercises from "./components/Exercises/Exercises";
import App from "./App";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Shop from "./components/Shop/Shop";
import About from "./components/About/About";
import Contact from "./components/Contact/ContactUs";
import MacroCalculator from './components/MacroCalculator/MacroCalculator'

export default (
  <Switch>
    <Route path="/dashboard/FoodLog" component={FoodLog} />
    <Route path="/dashboard/profileSettings" component={ProfileSettings} />
    <Route path="/profile" component={Profile} />
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/Exercises" component={Exercises} />
    <Route path="/Shop" component={Shop} />
    <Route path="/About" component={About} />
    <Route path="/Contact" component={Contact} />
    <Route path="/dashboard/MacroCalculator" component={MacroCalculator}/>
  </Switch>
);
