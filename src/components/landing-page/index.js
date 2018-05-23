import React, {Component} from 'react';
import {Header} from '../header';
import Footer from '../footer';
import ContactForm from './contact-form';
import HowItWorks from './how-it-works';

// Material UI
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

export default class LandingPage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        
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
}