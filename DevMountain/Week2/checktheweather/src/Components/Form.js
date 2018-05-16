import React, {Component} from "react";
import './Form.css';
import Button from "./Button"
 

class Form extends Component{
   cityChangeHandler(val){
            this.setState({cityText: val})
            }

     countryChangeHandler(val){
                this.setState({countryText: val})
                }

  constructor(props) {
      super(props);

      this.state = {
        city: " ",
        country: " ",
        temperature: " ",
        humidity: " "
      };
  }
  render(){
    return (
        <div className = "buttonarea">
        <input onChange={(e) => this.cityChangeHandler(e.target.value) } placeholder="Type City Here"/>
        <input onChange={(e) => this.countryChangeHandler(e.target.value)} placeholder = "Type country here"/>
        <Button name="Search" click={() => this.props.getTheWeather(this.state.cityText, this.state.countryText)}/>
        
        </div>
        ) 
  }
}

export default Form;