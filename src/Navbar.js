import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {withStyles} from '@material-ui/styles';
import styles from "./styles/NavbarStyles";

class Navbar extends Component {
    render(){
        const {classes} = this.props;
        return(

            <div className={classes.Navbar}>

                <Link to="/">
                    - Home -
                </Link>

                <Link to="/weather">
                    - Weather -
                </Link>
                
            </div>
        )
    }
}

export default withStyles(styles)(Navbar);