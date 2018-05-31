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

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


// the Card component style of Mui-UI
const styles = {
  card: {
    maxWidth: 400,
  },
  media: {
    height: 150,
    width: 150
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
};

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
                <Card className={classes.card}>
                    // Update this to be PAPER and then use 
                    // it for the HOW IT WORKS component
                    <div className={classes.details}>
                        <CardMedia
                          className={classes.media}
                          image="http://via.placeholder.com/550x150"
                          title="Programmers"
                        />
                    </div>
                    <CardContent>
                      <h3>
                        TRACK BUGS EASILY
                      </h3>
                      <p>
                        Beetl is an issue tracking system that can be easily integrated
                        into your software development cycles. Manage the issues related 
                        to all your productsin one responsive app.
                      </p>
                      <h6>BEETLE | A Lightweight Bug Trackeing System</h6>
                    </CardContent>
                </Card>

                <Grid item xs={12} style={{textAlign: 'center'}}>
                    <HowItWorks />
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
