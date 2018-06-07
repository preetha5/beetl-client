import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Switch, Route, Link, Redirect} from 'react-router-dom';
import UserPage from './userPage';
import NewUser from './newUser';
import {bindActionCreators} from 'redux';
import * as UserActions from '../../../actions/userActions';

//Material UI imports
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {List, ListItem} from 'material-ui/List';
import blueGrey from '@material-ui/core/colors/blueGrey';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
    style: {
        width: '100%',
        display: 'inline-block',
        backgroundColor: 'lightgrey',
        textAlign: 'center',
        fontFamily: 'Libre Franklin, sans-serif',
        fontWeight: 500,
    },
 headline : {
    fontFamily: 'Libre Franklin, sans-serif',
    fontWeight: 500,
    letterSpacing: '0',
    color: blueGrey[300],
    paddingBottom: '5px',
    marginTop: '20px',
    marginBottom: '2rem',
    textAlign: 'center'
  },
  contentGrid : {
    backgroundColor:'#eee',
    color:blueGrey[300],
    paddingTop:20,
    paddingBottom:'2rem',
    marginBottom: '9rem',
    [theme.breakpoints.up('sm')]: {
        marginBottom: '0',
      },
    },
    btnStyle: {
    width:190,
    marginBottom:20,
    backgroundColor: "primary",
    '&:hover': {
    backgroundColor: '#f50057',
    color:'white'
    }
}
})


class ManageUsers extends Component{
    
    componentWillMount(){
        this.props.actions.loadUsers();
    }

    render(){
        const { classes } = this.props;
        const errorMsg = this.props.error ? 
        `${this.props.error}`:null

        return(
            <Grid container>
                <Grid item xs={12}>
                    <h1 className={classes.headline}> Manage Users </h1>
                </Grid>
                <Grid item xs={12} sm={3} className={classes.style}>
                    <List>    
                        <ListItem>
                        <Button  color="primary" 
                        aria-label="add user"> <Link to={`/users/new`} > + Add a user</Link></Button>
                        </ListItem>
                        <Divider />
                    { this.props.users && this.props.users.map(({firstName,lastName, id}) => 
                        <ListItem key={id} primaryText={ <Link to={`/users/${id}`} > {firstName} {lastName} </Link> }/>       
                    )}
                    </List>

                </Grid>
                <Grid item xs={12} sm={9} className={classes.contentGrid}>
                    <Switch>
                    <Redirect exact from={`/users`} to={`/users/new`} />
                        <Route  path={`/users/new`} component={NewUser} />
                        <Route path={`/users/:userId`} component={UserPage} />
                    </Switch>
                </Grid>
                <Grid item xs={12} sm={9} className={classes.errorMsg}>
                    {errorMsg}
                </Grid>
                <Grid item xs={12} style={{textAlign: 'center',marginTop:20}}>
                    <Button
                    variant="outlined" 
                    component={Link}
                    to="/dashboard"
                    color="secondary" 
                    className={classes.btnStyle}>
                    Back to Dashboard</Button>
                    <Button
                    variant="outlined" 
                    component={Link}
                    to="/products"
                    color="secondary" 
                    className={classes.btnStyle}>
                    Manage Products</Button>
                </Grid>
            </Grid> 

        )
    }
}

const mapStateToProps = (state, props) => {
     return {
         users:state.usersReducer.users,
         error: state.usersReducer.error
     }   
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(UserActions, dispatch)
    };
    }

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ManageUsers));