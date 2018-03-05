// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;


import React, { Component } from 'react';
import Title from './Components/Title';
import Form from "./Components/Form"
import Weather from "./Components/Weather"
import axios from "axios"

const APIkey = "31c304a9e5306435f1bfba747c886af8";

class App extends Component{

getTheWeather(param1,param2){
   

  axios
  .get(`http://api.openweathermap.org/data/2.5/weather?q=Dallas,US&appid=${APIkey}&units=imperial`)
  .then(res => {
    console.log(res)
       })
}



  render(){
    return(
      <div> 
        <Title/>
        <Form getTheWeather={this.getTheWeather(this.props)}/>
        {/* <p>this.sta */}
        <Weather/>
      </div>
    );
  }
}

export default App;