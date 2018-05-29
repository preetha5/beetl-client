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

export function LandingPage(props){
    // If we are logged in redirect straight to the user's dashboard
    console.log("inside landing page", props.loggedIn);
    if (props.loggedIn) {
        console.log("redirecting to dash");
        return <Redirect to="/dashboard" />;
    }
    return(
        <div>
            <Grid container spacing={24}>
                <Grid item xs={12} style={{textAlign: 'center'}}>
                    <h1> Welcome to BEETL </h1>
                    <p><em>A Lightweight Bug Tracker </em></p>
                </Grid>
                <Grid item xs={12} style={{textAlign: 'center'}}>
                    <section className="beetlIntro">
                        <h3>Easily track your issues</h3>
                        <img src="http://via.placeholder.com/350x150" />
                        <p>Beetl is an issue tracking system that can be easily integrated
                        into your software development cycles. Manage the issues related to all your products
                        in one responsive app.
                        </p>
                    </section>
                </Grid>
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

export default connect(mapStateToProps)(LandingPage);