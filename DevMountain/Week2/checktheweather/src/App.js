import React, {Component} from 'react';
import routes from './routes';
import Home from './Components/Home';
import Header from './Components/Header';

export default class App extends Component {
  render() {
    return <div>
    <Header/>
    {routes}</div>;
  }
}
