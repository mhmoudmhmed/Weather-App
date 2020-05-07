import React, { PureComponent  } from 'react';
import {withStyles} from '@material-ui/styles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styles from "./styles/FormStyles";
import Weather from './Weather';


const API_WEATHER_KEY = "912e32b531bd55cd9234f37a29f6f6b1";


class Form extends PureComponent  {

    constructor(props){
        super(props);
        this.state = {
            city : '', //data.name
            main: '', //data.weather[0].main
            country: '', //data.sys.country
            lat: '', // data.coord.lat
            lon: '', // data.coord.lon
            desc: '', // data.weather[0].description,
            error: ""
        }
    }

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.city.value;
        const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?q=${city}, ${country}&appid=${API_WEATHER_KEY}`;
        let api= await fetch(WEATHER_API).catch((error) => {
            alert('API FAILED', error);
        });

        const data = await api.json();        

            if(city && country) {
                this.setState({
                    city : data.name,
                    main: data.weather[0].main,
                    country: data.sys.country,
                    min_temp: data.coord.lat,
                    max_temp: data.coord.lon,
                    desc: data.weather[0].description,
                    error: ''
                })
            } else {
                this.setState({
                    city : '', //data.name
                    main: '', //data.weather[0].main
                    country: '', //data.sys.country
                    lat: '', // data.coord.lat
                    lon: '', // data.coord.lon
                    desc: '', // data.weather[0].description,
                    error: "Enter Correct Name"
                })
            }
    }

    render(){

        const {city, country, main, min_temp, max_temp, desc, error} = this.state;
        const {classes} = this.props;

        return(
            <div className={classes.root}>

                <div className={classes.text}>
                    <h4>Just type the city name</h4>
                    <p>you must spelling correctly</p>
                </div>

                <form onSubmit={this.getWeather} className={classes.form}>
                    <input type="text" name="city" placeholder="enter city name" className={classes.input} />
                    <input type="text" name="country" placeholder="enter country name" className={classes.input} />
                    <button className="btn btn-primary">Find</button>
                </form>

                <TransitionGroup>
                    <CSSTransition  classNames="fade" timeout={1000}>
                        <Weather
                            city={city}
                            country={country}
                            main={main}
                            min_temp={min_temp}
                            max_temp={max_temp}
                            desc={desc}
                            error={error}
                        />
                    </CSSTransition>
                </TransitionGroup>

            </div>
        )
    }
}


export default withStyles(styles)(Form);