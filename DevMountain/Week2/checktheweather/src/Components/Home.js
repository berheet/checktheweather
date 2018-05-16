import React, {Component} from 'react';
import Title from './Title';
import Form from './Form';
import Weather from './Weather';
import axios from 'axios';
import '../App.css';

const APIkey = '31c304a9e5306435f1bfba747c886af8';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined
    };

    this.getTheWeather = this.getTheWeather.bind(this);
  }

  getTheWeather(city, country) {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APIkey}&units=imperial`
      )
      .then(res => {
        this.setState({
          temperature: res.data.main.temp,
          city: res.data.name,
          country: res.data.sys.country,
          humidity: res.data.main.humidity,
          description: res.data.weather[0].description,
          error: ''
        });
      })
      .catch(error => {
        alert('Please submit appropriate location!');
      });
  }

  render() {
    return (
      <div>
        <div>
          <Title />
          <Form getTheWeather={this.getTheWeather} />
          <Weather
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
          />
        </div>
      </div>
    );
  }
}

export default Home;
