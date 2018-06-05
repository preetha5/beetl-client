import React, { Component } from 'react';
import SignUpForm from './signUpForm';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {registerUser} from '../../actions/userActions';
import {login} from '../../actions/auth';
// Material UI
// Material UI
import Grid from '@material-ui/core/Grid';
import blueGrey from '@material-ui/core/colors/blueGrey';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import deepPurple from '@material-ui/core/colors/deepPurple';


const styles = theme => ({
  root:{
    backgroundColor: '#fff',
    paddingBottom: '9rem',
  },
  headline: {
    fontFamily: 'Libre Franklin, sans-serif',
    fontWeight: 200,
    letterSpacing: '0',
    color: blueGrey[300],
    paddingBottom: '5px',
    marginTop: '20px'
  },
  pitch: {
    padding: '1.5rem .5rem .5rem',
    textAlign: 'center'
  },
  demo: {
    padding: '.5rem',
    color: blueGrey[300],
  },
  demoType: {
    color: deepPurple[600]
  },
})


export class SignUp extends Component{
    handleSubmit(values){
        const {username, password, email, firstName, lastName} = values; 
        const userObj = {username, password, email, firstName, lastName}
        console.log(userObj);
        return this.props.dispatch(registerUser(userObj))
            .then(()=>this.props.dispatch(login(email, password)));
    }

    render(){
        const { classes } = this.props;
        return (
            <Grid container 
            justify='center'
            className={classes.root}>
            <Grid item xs={12} style={{textAlign: 'center'}}>
                <h1 className={classes.headline}> Register for Beetl</h1>
            </Grid>
            <Grid item xs={11} sm={5}>
                    <SignUpForm onSubmit ={(values) => this.handleSubmit(values)}/>
                    <p className={classes.pitch}>Already Registered? <Link to="/login">Login Here</Link></p>
                </Grid>
            </Grid>
        )
    }
}

SignUp.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
const mapStateToProps = state => ({
    loggedIn: state.authReducer.currentUser !== null
});

export default connect(mapStateToProps)(withStyles(styles)(SignUp));