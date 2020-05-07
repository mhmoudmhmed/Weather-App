import React from 'react';
import {withStyles} from '@material-ui/styles';
import styles from "./styles/WeatherStyles";

const Weather = (props) => {
    const {classes, city, country, lon, lat, desc, main} = props;
    return(

        <div>
            <div className={classes.weather}>

                {
                    props.city && props.country && <p>{city}, {country}</p>
                }

                {
                    props.main && <p>{main}</p>
                }

                {
                    lat && lon && 
                    <p>
                        <span>{lat} &#8451;</span>
                            ,
                        <span>{lon} &#8451;</span>
                    </p>
                }
                
                {
                    lon && <p>{lon} &#8451;</p>
                }

                {
                    desc && <p>{desc}</p>
                }
            </div>
        </div>
    )
}


export default withStyles(styles)(Weather);