import React, {Component} from 'react';
import {Header} from '../header';
import Footer from '../footer';
import ContactForm from './contact-form';
import HowItWorks from './how-it-works';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

// Material UI
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
import blueGrey from '@material-ui/core/colors/blueGrey';


import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const styles = theme => ({
  card: {
    spacing: '16',
  },
  media: {
    height: 0,
    paddingTop: '61%',
  },
  content: {
    flex: '1 0 auto',
    color: blueGrey[700] 
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  papermedia: {
    height: 0,
    paddingTop: '31%',
  },
  logo: {
    fontFamily: 'Kanit, sans-serif',
    fontWeight: 800,
    letterSpacing: '.2rem',
    whiteSpace: 'pre-wrap',
    color: '#0057ff'
  },
  tagline: {
    fontFamily: 'Libre Franklin, sans-serif',
    fontWeight: 400,
    letterSpacing: '0',
    color: blueGrey[700]
  },
  tiny_headline: {
    fontFamily: 'Libre Franklin, sans-serif',
    fontWeight: 200,
    letterSpacing: '0',
    color: blueGrey[300],
    fontSize: '2.2rem'
  },
  accent: {
    fontWeight: 800,
    color: '#0057ff'
  },
  gridded: {
    display: 'grid'
  }
});

export function LandingPage(props){
    // If we are logged in redirect straight to the user's dashboard
    console.log("inside landing page", props.loggedIn);
    if (props.loggedIn) {
        console.log("redirecting to dash");
        return <Redirect to="/dashboard" />;
    }

    const { classes } = props;

    return(
        <div>
            <Grid container spacing={24}>


                <Paper className={classes.card}>
                    <div className={classes.details}>
                        <CardMedia
                          className={classes.papermedia}
                          image="http://via.placeholder.com/550x150"
                          title="Programmers"
                        />
                    </div>
                    <CardContent>
                      <h3>
                        TRACKS BUGS EASILY
                      </h3>
                      <p>
                        Beetl is an issue tracking system that can be easily integrated
                        into your software development cycles. Manage the issues related 
                        to all your productsin one responsive app.
                      </p>
                      <h6>BEETLE | A Lightweight Bug Trackeing System</h6>
                    </CardContent>
                </Paper>




                <Grid item xs={12} sm={4} >
                    <Card className={classes.card}>
                        <div className={classes.details}>
                            <CardMedia
                              className={classes.media}
                              image="http://via.placeholder.com/327x200"
                              title="ADD PRODUCTS SCREEN SHOT"
                            />
                        </div>
                        <CardContent>
                          <h6 className={classes.gridded}>
                            ADD PRODCTS + USERS THEN<span className={classes.tiny_headline}>BUILD TEAMS </span> 
                            <span className={classes.accent}>EASILY</span>
                          </h6>
                          <p>
                            Add products and users
                            Praesent ac odio at erat ullamcorper finibus id a leo. Nunc tellus tellus, 
                            cursus sed finibus id, consequat eu quam.
                          </p>
                          <h6 className={classes.logo}>BEETLE {"\n"}<span className={classes.tagline}>A Lightweight Bug Tracking System</span></h6>
                        </CardContent>
                    </Card>
                </Grid>
                
                <Grid item xs={12} sm={4} >
                    <Card className={classes.card}>
                        <div className={classes.details}>
                            <CardMedia
                              className={classes.media}
                              image="http://via.placeholder.com/327x200"
                              title="SOLVE ISSUES"
                            />
                        </div>
                        <CardContent>
                          <h6 className={classes.gridded}>
                            SOLVE COMPLEX ISSUES <span className={classes.tiny_headline}>TOGETHER {"\n"}</span> 
                            <span className={classes.accent}>EASILY</span>
                          </h6>
                          <p>
                            Create issues and assign to your team
                            Praesent ac odio at erat ullamcorper finibus id a leo. Nunc tellus tellus, 
                            cursus sed finibus id.
                          </p>
                          <h6 className={classes.logo}>BEETLE {"\n"}<span className={classes.tagline}>A Lightweight Bug Tracking System</span></h6>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={4} >
                    <Card className={classes.card}>
                        <div className={classes.details}>
                            <CardMedia
                              className={classes.media}
                              image="http://via.placeholder.com/327x200"
                              title="TRACK THE LIFE OF A BUG"
                            />
                        </div>
                        <CardContent>
                          <h6 className={classes.gridded}>
                            TRACK ALL STAGES <span className={classes.tiny_headline}>BIRTH to DEATH </span> 
                            <span className={classes.accent}>EASILY</span>
                          </h6>
                          <p className={classes.content}>
                            Update and track issues during all their stages from open to built. 
                            Praesent ac odio at erat ullamcorper finibus id a leo. Nunc tellus tellus.                          </p> 
                          <h6 className={classes.logo}>BEETLE {"\n"}<span className={classes.tagline}>A Lightweight Bug Tracking System</span></h6>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} style={{textAlign: 'center'}}>
                    <h3>Want Beetl Customized for your Company? Contact Us.</h3>
                    <ContactForm />
                </Grid>
            </Grid>
        </div>
    )
}

const mapStateToProps = state => ({
    loggedIn: state.authReducer.currentUser !== null
});

LandingPage.propTypes = {
  classes: PropTypes.object.isRequired,
};


const styledComponent = withStyles(styles)(LandingPage);
export default connect(mapStateToProps)(styledComponent);
