import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './app.css';
import {Header} from './header';
import LandingPage from './landing-page';
import {Main} from './main';
import Dashboard from './main/dashboard';
import Footer from './footer';
import Login from './login';
import SignUp from './signup';
// Import for Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {deepOrange500} from 'material-ui/styles/colors';
import {orange500} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
    palette: {
      primary1Color: orange500,
      accent1Color: deepOrange500
    }
  });

class App extends Component {
    constructor(props){
        super(props);
    }
    
  render() {
    let loggedIn = true;
    if (!loggedIn){
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <Router >
                    <div>
                    <Header loggedIn={loggedIn} />
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={SignUp} />
                    <Footer />
                </div>
                </Router>
            </MuiThemeProvider>
        )
    }
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
        <Router >
            <div>
                <Header loggedIn={loggedIn}/>
                <Route exact path="/" render={(props) => (
                    <Main name="Joe Admin" role="admin" />
                )}/>
                <Footer />
            </div>
        </Router >
        </MuiThemeProvider>
    );
  }
}

export default App;
