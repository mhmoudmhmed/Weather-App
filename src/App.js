import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {withStyles} from '@material-ui/styles';
import styles from './styles/AppStyles';
import Home from './Home';
import Form from './From';
import Page from './Page';
import Navbar from './Navbar';

class App extends Component{


  render(){

    const {classes}= this.props;

    return(

      <div className={classes.root}>
        <Route
        render={({location}) => (
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={1000}>
              <Switch location={location}>
                <Route
                  exact
                  path="/weather"
                  render={() =>
                    <Page>
                      <Form />
                    </Page>
                }
                />

                <Route
                  exact
                  path="/"
                  render={() =>
                    <Page>
                      <Home />
                    </Page>
                }
                />
                <Route
                  exact
                  render={() => <h1>ERORR 404</h1>}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
        />
        <Navbar />
      </div>
      
    )
  }
}

export default withStyles(styles)(App);
