import React, { Component } from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, withRouter, Switch} from 'react-router-dom';
import './app.css';
import Header from './header';
import LandingPage from './landing-page';
import Main from './main';
import Footer from './footer';
import Login from './login';
import SignUp from './signup';
import CreateIssue from './main/create_issue';
import ViewIssues from './main/view_issues';
import IssueDetails from './main/issue_details';
import Sidebar from './main/sidebar';
import Help from './main/help';
import ManageUsers from './main/manage/manage_users';
import UserPage from './main/manage/userPage';
import NewUser from './main/manage/newUser';
import ManageProducts from './main/manage/manage_products';
import {refreshAuthToken} from '../actions/auth';
import {loadAuthToken} from '../utils/localStorage';

// Import for Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { createMuiTheme } from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber';
import deepPurple from '@material-ui/core/colors/deepPurple';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import yellow from 'material-ui/styles/colors';
// import {orange} from 'material-ui/styles/colors';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';


const muiTheme = getMuiTheme({
    palette: {
      primary1Color: amber[500],
      accent1Color: deepPurple['A700']
    }
  });

export class App extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        // Check for token and update application state if required
        //console.log(localStorage.getItem('authToken'));
        if(localStorage.getItem('authToken')) {
            // Try to get a fresh auth token if we had an existing one in
            // localStorage
            //props.dispatch(refreshAuthToken);
        }
    }
    componentDidUpdate(prevProps) {
        if (!prevProps.loggedIn && this.props.loggedIn) {
            // When we are logged in, refresh the auth token periodically
            this.startPeriodicRefresh();
        } else if (prevProps.loggedIn && !this.props.loggedIn) {
            // Stop refreshing when we log out
            this.stopPeriodicRefresh();
        }
    }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000 // One hour
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }

  render() {
    console.log("inside app.js ", this.props.loggedIn);
    // if (!this.props.loggedIn){
    //     return (
    //         <MuiThemeProvider muiTheme={muiTheme}>
    //             <Router >
    //                 <div>
    //                 <Header loggedIn={this.props.loggedIn} />
    //                 <Route exact path="/" component={LandingPage} />
    //                 <Route exact path="/login" component={Login} />
    //                 <Route exact path="/signup" component={SignUp} />
    //                 <Footer />
    //             </div>
    //             </Router>
    //         </MuiThemeProvider>
    //     )
    // }
    //console.log("rendering dash");
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
        <Router>
            <div>
                <Header />
                <Grid container
                    direction='row'
                    justify='center'
                >
                    <Grid item>
                        <Hidden xsDown>
                            <Paper><Sidebar /></Paper>
                        </Hidden>
                    </Grid>
                    <Grid item xs={12} sm={10}>
                        <Switch>
                            <Route exact path="/" component={LandingPage} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/signup" component={SignUp} />
                            <Route exact path="/dashboard" render={(props) => (
                                <Main name="Joe Admin" role="admin" />
                            )}/>
                            <Route path="/users" component={ManageUsers} />
                            <Route path="/products" component={ManageProducts} />
                            <Route exact path="/create_issue" component={CreateIssue} />
                            <Route exact path="/view_issues" component={ViewIssues} />
                            <Route
                                exact
                                path="/view_issues/:bugId"
                                component={IssueDetails}
                            />
                            <Route exact path="/help" component={Help} />
                            { /*<Route exact path="/logout" component={LandingPage} /> */}
                        </Switch>
                    </Grid>
                </Grid>
                <Footer />
            </div>
        </Router>
        </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
    hasAuthToken: state.authReducer.authToken !== null,
    loggedIn: state.authReducer.currentUser !== null
});

export default (connect(mapStateToProps))(App);
