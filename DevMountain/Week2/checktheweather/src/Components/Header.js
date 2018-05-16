import React, {Component} from 'react';
import {Link, Switch} from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div>
        <h2>
          {' '}
          <ul className="dboardUl">
            <li className="dboardli">
              <Link to="/">Home</Link>
            </li>
            <li className="dboardli">
              <Link to="/PopularSites">Popular Weather Sites</Link>
            </li>
          </ul>
        </h2>
      </div>
    );
  }
}
