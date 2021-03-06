import React, {Component} from 'react';
import {Redirect} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../../../actions/userActions';
import UserForm from './userForm';
//import {updateUser} from '../../../actions/userActions';

/*Material UI imports */
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class UserPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            user:this.props.user,
            editing:false,
            deleting:false
        }
        this.updateUser = this.updateUser.bind(this);
        this.handleDeleteUser = this.handleDeleteUser.bind(this);
        this.handleEditUser = this.handleEditUser.bind(this);
        this.updateUserState = this.updateUserState.bind(this);
    }

    handleEditUser(){
        this.setState(
            {editing:true}
        )
    }

    updateUserState = (name) => event =>{
        const field = name;
        const user = this.props.user;
        
        user[field] = event.target.value;
        //this.setState({user: user});
        //Add dispatch
        this.props.actions.updateUserField(user);  
    }

    updateUser(event){
        event.preventDefault();
        console.log("updating...", this.props.user);
        this.props.actions.updateUser(
            this.props.userId, this.props.user);  
        this.setState(
            {editing:false}
        ) 
    }

    handleDeleteUser(event){
        this.props.actions.deleteUser(this.props.userId);
        this.setState({
            deleting:true
        })
    }
    
    render(){
        if(this.state.deleting){ 
            return (<Redirect to='/users' />);
        }

        if(this.state.editing){
             return(
                <UserForm user={this.props.user}
                onSubmit={this.updateUser}  
                onChange= {field =>this.updateUserState(field)}/>
             )   
        }
        return(
            <Grid container justify='center'>
            <Grid item style={{textAlign: 'center'}}>
                <p> Username: {this.props.user && this.props.user.username} </p>
                <p> FirstName: {this.props.user && this.props.user.firstName} </p>
                <p> LastName: {this.props.user && this.props.user.lastName} </p>
                <p> Email: {this.props.user && this.props.user.email} </p>
                <p> Role: {this.props.user && this.props.user.role} </p>
                <Button variant="raised"
                onClick={() => this.handleEditUser()}>
                Edit
                </Button>
            
                <Button variant="raised"
                    onClick={() => this.handleDeleteUser()}>
                    Delete
                </Button>
            </Grid>
        </Grid>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(Actions, dispatch)
    };
  }

const mapStateToProps = (state, props) => {
    const userId = props.match.params.userId;

    const currentUser = state.usersReducer.users.find(user => 
        user.id === userId);


    return {user:currentUser, userId};    
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
