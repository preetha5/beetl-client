import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './app.css';
import {Header} from './header';
import LandingPage from './landing-page';
import {Main} from './main';
import Footer from './footer';
import Login from './login';
import SignUp from './signup';
import CreateIssue from './main/create_issue';
import ViewIssues from './main/view_issues';
import IssueDetails from './main/issue_details';
import Sidebar from './main/sidebar';
import Help from './main/help';

// Import for Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {deepOrange500} from 'material-ui/styles/colors';
import {orange500} from 'material-ui/styles/colors';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';


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
                <Grid container>
                    <Grid item xs={2}>
                        <Hidden xsDown>
                            <Paper><Sidebar /></Paper>
                        </Hidden>
                    </Grid>
                    <Grid item xs={10}>
                        <Route exact path="/" render={(props) => (
                            <Main name="Joe Admin" role="admin" />
                        )}/>
                        <Route exact path="/create_issue" component={CreateIssue} />
                        <Route exact path="/view_issues" component={ViewIssues} />
                        <Route
                            exact
                            path="/view_issues/:bugId"
                            component={IssueDetails}
                        />
                        <Route exact path="/help" component={Help} />
                        <Route exact path="/logout" component={LandingPage} />
                    </Grid>
                </Grid>
                <Footer />
                </div>
        </Router >
        </MuiThemeProvider>
    );
  }
}

export default App;
