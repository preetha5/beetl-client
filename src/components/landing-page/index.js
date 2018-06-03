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
import amber from '@material-ui/core/colors/amber';
import deepPurple from '@material-ui/core/colors/deepPurple';
import blueGrey from '@material-ui/core/colors/blueGrey';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

//import Bug1 from ' /img/bug.png';

const styles = theme => ({
  card: {
    spacing: '16',
  },
  topcard: {
    display: 'flex',
    padding: '10px',
    margin: '0px',
  },
  cover: {
    width: 650,
    height: 'auto',
    display: 'flex'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
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
  headline: {
    fontFamily: 'Libre Franklin, sans-serif',
    fontWeight: 200,
    letterSpacing: '0',
    color: blueGrey[300],
    fontSize: '2.5rem',
    paddingBottom: '5px'
  },
  tiny_headline: {
    fontFamily: 'Libre Franklin, sans-serif',
    fontWeight: 200,
    letterSpacing: '0',
    color: blueGrey[300],
    fontSize: 'x-large',
    paddingBottom: '5px'
  },
  accent: {
    fontWeight: 800,
    color: '#0057ff'
  },
  bug:{
    width: '65px',
    height: '75px',
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 255, 0)',
    //backgroundImage: `url(${Bug1})`,// The preferred way
    // What is working:
    backgroundImage: `url('https://i.pinimg.com/564x/e6/c9/54/e6c954d0d99c396548b0e1caba8b8f26.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    display: 'grid',
    overflowX: 'overlay',
    marginLeft: '-60px',
    marginTop: '7px',
  },
  gridded: {
    display: 'grid'
  },
  mainForm:{
    backgroundColor: amber[500],
    marginTop: '1.5%',
    marginBottom: '150px',
    paddingBottom: '50px !important'
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
            <Grid container spacing={24} justify='center'>
            <Grid item xs={11} sm={12} >
                <Card className={classes.topcard}>
                    <CardMedia
                        className={classes.cover}
                        image="https://images.unsplash.com/photo-1515188027261-e7f35b9b61bc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=663f07a80438eac1be1be9da06b7e865&auto=format&fit=crop&w=2200&q=80"
                        title="Programmers"
                    />
                   <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <h3 className={classes.headline}>
                                TRACK BUGS EASILY
                            </h3>
                            <div className={classes.bug}></div>
                            <p>
                                <span className={classes.accent}> Easily & Efficiently </span> manage the issues related to all your products 
                                in one responsive app. BEETL is an issue tracking system that can be 
                                easily integrated into all of your software development cycles. 
                                Killing Bugs has never been so much fun.
                            </p>
                            <h6 className={classes.logo}>BEETL {"\n"}<span className={classes.tagline}>A Lightweight Bug Tracking System</span></h6>
                        </CardContent>
                    </div>
                </Card>
            </Grid>
                
                <Grid item xs={11} sm={4} >
                    <Card className={classes.card}>
                        <div className={classes.details}>
                            <CardMedia
                              className={classes.media}
                              image="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cbbd27149a8243a42eb2bd0bd918ba8f&auto=format&fit=crop&w=1500&q=80"
                              title="ADD PRODUCTS SCREEN SHOT"
                            />
                        </div>
                        <CardContent>
                          <h6 className={classes.gridded}>
                            ADD PRODCTS + USERS<span className={classes.tiny_headline}>BUILD TEAMS </span> 
                            <span className={classes.accent}>EASILY</span>
                          </h6>
                          <p>
                            Add products and users
                            Praesent ac odio at erat ullamcorper finibus id a leo. Nunc tellus tellus, 
                            cursus sed finibus id, consequat eu.
                          </p>
                          <h6 className={classes.logo}>BEETL {"\n"}<span className={classes.tagline}>A Lightweight Bug Tracking System</span></h6>
                        </CardContent>
                    </Card>
                </Grid>
                
                <Grid item xs={11} sm={4} >
                    <Card className={classes.card}>
                        <div className={classes.details}>
                            <CardMedia
                              className={classes.media}
                              image="https://images.unsplash.com/photo-1498622566531-8459261af8f0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e7cd0567d2120a2d88ad2cbadfac1642&auto=format&fit=crop&w=1500&q=80"
                              title="SOLVE ISSUES"
                            />
                        </div>
                        <CardContent>
                          <h6 className={classes.gridded}>
                            SOLVE COMPLEX ISSUES <span className={classes.tiny_headline}>TOGETHER {"\n"}</span> 
                            <span className={classes.accent}>EFFECTIVELY</span>
                          </h6>
                          <p>
                            Create issues and assign to your team
                            Praesent ac odio at erat ullamcorper finibus id a leo. Nunc tellus tellus, 
                            cursus sed finibus id.
                          </p>
                          <h6 className={classes.logo}>BEETL {"\n"}<span className={classes.tagline}>A Lightweight Bug Tracking System</span></h6>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={11} sm={4} >
                    <Card className={classes.card}>
                        <div className={classes.details}>
                            <CardMedia
                              className={classes.media}
                              image="https://images.unsplash.com/photo-1501780392773-287d506245a5?ixlib=rb-0.3.5&s=a2fc99299dda2a5f290b48c904b09dd0&auto=format&fit=crop&w=2100&q=80"
                              title="TRACK THE LIFE OF A BUG"
                            />
                        </div>
                        <CardContent>
                          <h6 className={classes.gridded}>
                            TRACK ALL STAGES <span className={classes.tiny_headline}>BIRTH to DEATH </span> 
                            <span className={classes.accent}>EFFICIENTLY</span>
                          </h6>
                          <p className={classes.content}>
                            Update and track issues during all their stages from open to built. 
                            Praesent ac odio at erat ullamcorper finibus id a leo. Nunc tellus.
                          </p> 
                          <h6 className={classes.logo}>BEETL {"\n"}<span className={classes.tagline}>A Lightweight Bug Tracking System</span></h6>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={12} className={classes.mainForm} style={{textAlign: 'center'}}>
                    <h3>Need a Customized Version? Make Contact</h3>
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

