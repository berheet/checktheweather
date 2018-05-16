import React, {Component} from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import PopularSites from './Components/popularsites';
import Home from './Components/Home';

export default (
  <Switch>
    <Route path="/PopularSites" component={PopularSites} />
    <Route exact path="/" component={Home} />
  </Switch>
);
