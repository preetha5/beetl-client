import React from 'react';
import MaterialUiForm from '../../utils/material-ui-form';
import LoginForm from './loginForm';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import {login} from '../../actions/auth';
// Material UI
import Grid from '@material-ui/core/Grid';

export class Login extends React.Component{
    handleSubmit(values){
        const {email, password} = values; 
        const loginObj = {email, password}
        console.log(loginObj);
        return this.props.dispatch(login(email, password));
    }

    render(){
        if (this.props.loggedIn) {
            console.log("redirecting to dash");
            return <Redirect to="/dashboard" />;
        }
        return (
            <Grid container>
                <Grid item xs={12} style={{textAlign: 'center'}}>
                    <h1> Login </h1>
                </Grid>
                <Grid item xs={12}>
                    <LoginForm onSubmit ={(values) => this.handleSubmit(values)}/>
                    <p>New User? <Link to="/signup">Sign Up Here</Link></p>
                </Grid>
                <Grid item xs={12}>
                    <p>Demo Login use: </p>
                    <p>Email: admin@beetl.com</p>
                    <p>Password: test1234</p>
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = state => ({
    loggedIn: state.authReducer.currentUser !== null
});

export default connect(mapStateToProps)(Login);