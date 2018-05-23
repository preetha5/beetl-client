import React, {Component} from 'react';
import {Redirect} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../../../actions/userActions';
import UserForm from './userForm';
//import {updateUser} from '../../../actions/userActions';

/*Material UI imports */
import Button from '@material-ui/core/Button';

class UserPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            user:this.props.user,
            editing:false,
            deleting:false
        }
        this.saveUser = this.saveUser.bind(this);
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
        console.log("updating input for user", user)
        //this.setState({user: user});
        //Add dispatch
        this.props.actions.updateUserField(user);  
    }

    saveUser(event){
        event.preventDefault();
        this.setState(
            {editing:false}
        )
        console.log("saving...", this.props.user)
        this.props.actions.updateUser(this.props.user);  
    }

    handleDeleteUser(event){
        this.props.actions.deleteUser(this.props.user);
        this.setState({
            deleting:true
        })
    }
    
    render(){
        if(this.state.deleting){ 
            return (<Redirect to='/users' />);
        }
        console.log(this.props.user);
        if(this.state.editing){
             return(
                <UserForm user={this.props.user}
                onSave={this.saveUser}  
                onChange= {field =>this.updateUserState(field)}/>
             )   
        }
        return(
            <div>
                <p> FirstName: {this.props.user.firstName} </p>
                <p> LastName: {this.props.user.lastName} </p>
                <p> Email: {this.props.user.email} </p>
                <p> Role: {this.props.user.role} </p>
                <Button variant="raised"
                onClick={() => this.handleEditUser()}>
                Edit
                </Button>
            
                <Button variant="raised"
                    onClick={() => this.handleDeleteUser()}>
                    Delete
                </Button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(Actions, dispatch)
    };
  }

const mapStateToProps = (state, props) => {
    const userId = parseInt(props.match.params.userId);
    console.log(userId);
    const currentUser = state.usersReducer.users.filter(user => user.id == userId);
    console.log(currentUser);
    return {
        user:currentUser[0]
    }
    // let emptyUser = {id:"",firstName:"", lastName:"", email:"", role:""};
    // if(state.users){
    //     const currentUser = state.users.filter(user => user.id == userId);
    //     console.log(currentUser[0]);
    //     return {user:currentUser[0]};
    // } else {
    //     return {user:emptyUser};
    // }
    
    
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
