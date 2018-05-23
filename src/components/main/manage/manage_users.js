import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Switch, Route, Link} from 'react-router-dom';
import UserPage from './userPage';
import NewUser from './newUser';
import {bindActionCreators} from 'redux';
import * as UserActions from '../../../actions/userActions';

//Material UI imports
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {loadUsers} from '../../../actions/userActions';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import {List, ListItem} from 'material-ui/List';
import { yellow100 } from 'material-ui/styles/colors';

const style = {
    width: 100,
    marginTop: 20,
    marginRight: 20,
    marginBottom: 20,
    display: 'inline-block',
    backgroundColor:yellow100
  };

class ManageUsers extends Component{
    
    componentWillMount(){
        this.props.actions.loadUsers();
        console.log(this.props);
    }

    render(){
        console.log(this.props);
        return(
            <Grid container>
                <h1> Manage Users </h1>
                <Grid item xs={12}>
                    <Button variant="fab" color="primary" 
                    aria-label="add user">
                    <Link to={`/users/new`} ><AddIcon /></Link></Button>
                </Grid>
                <Grid item xs={12} sm={3} >
                    <Paper style={style} zdepth={3}>
                    <List>
                    { this.props.users && this.props.users.map(({firstName,lastName, id}) => 
                        <ListItem key={id} primaryText={ <Link to={`/users/${id}`} > {firstName} {lastName} </Link> }/>       
                    )}
                    </List>
                </Paper>
                </Grid>
                <Grid item xs={12} sm={9}>
                    <Switch>
                        <Route  path={`/users/new`} component={NewUser} />
                        <Route path={`/users/:userId`} component={UserPage} />
                    </Switch>
                </Grid>
            </Grid> 

        )
    }
}

// ManageUsers.propTypes  = {
//     users:PropTypes.array.isRequired,
//     children: PropTypes.object
// }

const mapStateToProps = (state, props) => {
     console.log(state);
     return {
         users:state.usersReducer.users
     }   
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(UserActions, dispatch)
    };
    }

export default connect(mapStateToProps, mapDispatchToProps)(ManageUsers);