import React, {Component} from "react"
import Axios from "axios";
import Button from './Button'

class Weather extends Component{
    constructor(){
        super();

        this.state = {
            favoritez: []
        }
    }

    addToFavorites(city, temperature, description) {
        // if(this.state.favoritez.includes())
        Axios
        .post("/api/add", {city, temperature, description}) 
        .then(res => { 
            this.setState({favoritez: res.data})
        })
    }

    onDelete(idx) {
        console.log(idx)
        Axios
        .delete(`/api/delete?idx=${idx}`) 
            .then(res =>{
                this.setState({favoritez: res.data})
        })
    }


    render(){
        console.log(this.state);
        const rtMap = this.state.favoritez.map((element, idx) => ( 
            <div className="idvDiv" key={idx}>
                <p> {element.city} </p>
                <p> {element.description} </p>
                <p> {element.temperature} </p>
                <button name ="Remove" onClick={() => this.onDelete(idx)}>Remove </button>
                </div>
    ))
        return(
            <div>
            <div className="preview">{this.props.city && this.props.country && <div>Location: {this.props.city}, {this.props.country}</div>}
            {this.props.temperature && <div>Temperature: {this.props.temperature} 'F</div>}
            {this.props.humidity && <div>Humidity: {this.props.humidity}</div>}
            {this.props.description && <div>Conditions: {this.props.description}</div>}
            {this.props.error && <div> {this.props.error} </div>}

            <Button name="Add" click={() => this.addToFavorites(this.props.city, this.props.temperature, this.props.description)}/> </div>
             <div style={{marginTop:100, fontWeight:"bold"}} > Favorites: </div> 
                  <div className ="favoritesList"> 
                     {rtMap}
                    </div> 
                 </div>
        );
    }
}

export default Weather;

