import React, {Component} from "react";
import Header from "./Header";

class Weather extends Component {
    state = { weather:false };
    random = false;
    componentDidMount(){

        fetch('https://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=&units=metric')
        .then((res) => res.json())
        .then((res) => {
        this.setState({weather: res});
    })
        .catch( error => console.log('you guys are getting forecast? ', error) );
    }

    randomWeather = ()  => {
        let lat=Math.floor(Math.random() * 181) - 90;
        let long=Math.floor(Math.random() * 361) - 180;
        fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=&units=metric')
        .then((res) => res.json())
        .then((res) => {
        this.random = true;
        this.setState({weather: res});
    })
        .catch( error => console.log('you guys are getting forecast? ', error) );
    }


    render() {
        let info = this.state.weather;
        let temp = info!==false?info.main.temp:'x';
        let humid = info!==false?info.main.humidity:'y';
        let place = info!==false?info.name:'z';
        
        if (this.random!==false&&place===''){
            this.randomWeather();
        }
        return (
            <div>
                <Header />
                <h2 style={{fontSize:'2em',fontWeight:'bold'}} onClick={this.randomWeather}>{place}'s temperature is: {temp} cº and {humid}% humidity</h2>
            </div>
        )
    }
}

export default Weather;