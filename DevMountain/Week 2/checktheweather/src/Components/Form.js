import React, {Component} from "react";

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
        country: " "
      };
  }
  render(){
    return (
        <div>
        <input onChange={(e) => this.cityChangeHandler(e.target.value) } placeholder="Type City Here"/>
        <input onChange={(e) => this.countryChangeHandler(e.target.value)} placeholder = "Type country here"/>
        <button onClick ={() => this.props.getTheWeather(this.state.cityText, this.state.countryText)}> SUBMIT </button>
        </div>
        ) 
  }
}

export default Form;