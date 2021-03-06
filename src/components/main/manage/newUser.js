import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import {bindActionCreators} from 'redux';
import * as Actions from '../../../actions/userActions';
import NewUserForm from './newUserForm';

//Material UI imports
import Grid from '@material-ui/core/Grid';

class NewUser extends React.Component{
    constructor(props){
        super(props);
        //temp code until backend is ready
        //let temp = Math.floor(Math.random()*2000);
        this.state = {
            user:{username:"", password:"", firstName:"",lastName:"", email:"", role:""},
            adding:false
        }
        this.createUser = this.createUser.bind(this);
        this.updateUserState = this.updateUserState.bind(this);
    }

    createUser(event){
        event.preventDefault();
        console.log(this.state.user);
        this.props.actions.createUser(this.state.user);
        this.setState(
            {adding:true}
        );
    }

    updateUserState = (name) => event =>{
        const field = name;
        const user = this.state.user;
        user[field] = event.target.value;
        return this.setState({user: user});
      }

    render(){
        if(this.state.adding){
            return( <Redirect to="/users" />);
         }
        return(
            <Grid container justify='center'>
            <Grid item xs={12} style={{textAlign: 'center'}}>
                <h2>Add User</h2>
                <NewUserForm user={this.state.user}
                onSubmit={this.createUser} 
                onChange= {field =>this.updateUserState(field) }/>
            </Grid>
        </Grid>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(Actions, dispatch)
    };
  }

  export default connect(null, mapDispatchToProps)(NewUser);