import React, { Component } from 'react';
import SignUpForm from './signUpForm';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {registerUser} from '../../actions/userActions';
import {login} from '../../actions/auth';
// Material UI
import Grid from '@material-ui/core/Grid';

export class SignUp extends Component{
    handleSubmit(values){
        const {username, password, email, firstName, lastName} = values; 
        const userObj = {username, password, email, firstName, lastName}
        console.log(userObj);
        return this.props.dispatch(registerUser(userObj))
            .then(()=>this.props.dispatch(login(email, password)));
    }

    render(){
        return (
            <Grid container>
                <Grid item xs={12} style={{textAlign: 'center'}}>
                    <h1> Register for Beetl</h1>
                </Grid>
                <Grid item xs={12}>
                    <SignUpForm onSubmit ={(values) => this.handleSubmit(values)}/>
                    <p>Already Registered? <Link to="/login">Login Here</Link></p>
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = state => ({
    loggedIn: state.authReducer.currentUser !== null
});

export default connect(mapStateToProps)(SignUp);