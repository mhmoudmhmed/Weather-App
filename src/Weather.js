import React from 'react';
import {withStyles} from '@material-ui/styles';
import styles from "./styles/WeatherStyles";

const Weather = (props) => {
    const {classes, city, country, max_temp, min_temp, desc, main, error} = props;
    return(

        <div>
            <div className={classes.weather}>

                {
                    city && country && <p>{city}, {country}</p>
                }

                {
                    main && <p>{main}</p>
                }

                {
                    min_temp && max_temp && 
                    <p>
                        <span>{min_temp} &#8451;</span>
                            ,
                        <span>{min_temp} &#8451;</span>
                    </p>
                }
                
                {
                    max_temp && <p>{max_temp} &#8451;</p>
                }

                {
                    desc && <p>{desc}</p>
                }

                {
                    error && <p> {error} </p>
                }
            </div>
        </div>
    )
}


export default withStyles(styles)(Weather);