import React, { Component } from 'react';
import {withStyles} from '@material-ui/styles';
import styles from "./styles/homPageStyles";
import { CSSTransition, TransitionGroup } from 'react-transition-group';


class Home extends Component{

    render(){
        const {classes} = this.props;
        return(
            <div className={classes.homePage}>
                <TransitionGroup>
                    <CSSTransition classNames="fade" timeout={1000}>
                        <div className={classes.homeContent}>
                            <h1>Hello <span>.</span></h1>
                            <h3>Find The Weather</h3>
                            <hr/>
                            <h3>In your City</h3>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        )
    }
}

export default withStyles(styles)(Home);