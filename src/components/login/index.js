import React, { Component } from 'react';
import MaterialUiForm from '../../utils/material-ui-form';
import LoginForm from './loginForm';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import {login} from '../../actions/auth';

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
    textAlign: 'center'
  },
  demoType: {
    color: deepPurple[600]
  },
})

class Login extends Component {
    handleSubmit(values){
        const {email, password} = values; 
        const loginObj = {email, password}
        console.log(loginObj);
        return this.props.dispatch(login(email, password));
    }

    render(){
        const { classes } = this.props;
        if (this.props.loggedIn) {
            console.log("redirecting to dash");
            return <Redirect to="/dashboard" />;
        }

        return (
            <Grid container 
            justify='center'
            className={classes.root}>
                <Grid item xs={12}style={{textAlign: 'center'}}>
                    <h1 className={classes.headline}>Login</h1>
                </Grid>
                
                <Grid item xs={11} sm={5}>
                    <LoginForm onSubmit ={(values) => this.handleSubmit(values)}/>
                    <p className={classes.pitch}>New User? <Link to="/signup">Sign Up Here</Link></p>
                    <h6 className={classes.demo}>Demo Login use: </h6>
                    <h6 className={classes.demo}>Email: <span className={classes.demoType}>admin@beetl.com</span></h6>
                    <h6 className={classes.demo}>Password: <span className={classes.demoType}>test1234</span></h6>
                </Grid>
            </Grid>
        )
    }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    loggedIn: state.authReducer.currentUser !== null
});

const styledComponent = withStyles(styles)(Login);
export default connect(mapStateToProps)(styledComponent);

