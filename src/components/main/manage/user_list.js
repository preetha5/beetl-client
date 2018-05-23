import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Route, Link} from 'react-router-dom';
import UserPage from './userPage';

//Material UI imports
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {List, ListItem} from 'material-ui/List';

const UserList = ({users}) =>{
    
    return(
        <div>
        <Paper style={style} zdepth={3}>
            <List>
            {users.map(user => 
                <ListItem key={user.id} primaryText={ <Link to={`/users/${user.id}`} > {user.name} </Link> }/>       
            )}
            </List>
        </Paper>
        <Route path={`/users/:userId`} component={UserPage} />
        </div>
    );
};

UserList.propType = {
    users: PropTypes.array.isRequired
};

export default UserList;