import React, {Component} from 'react';
import AllIssues from './bugs/allIssues';
import MyBugs from './bugs/myBugs';
import {Link} from 'react-router-dom';
import RequiresLogin from '../requires-login';

// Material ui import
import MenuItem from 'material-ui/MenuItem';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import deepPurple from '@material-ui/core/colors/deepPurple';
import './index.css';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    btnContainer:{
        marginTop: '2em'
    },
    container: {
      display: 'flex',
    },
    margin: {
        margin: theme.spacing.unit,
      },
    btnStyle: {
        width:190,
        marginBottom:20,
    backgroundColor: "primary",
    '&:hover': {
        backgroundColor: '#f50057',
        color:'white'
    }
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
      flex: '1 0 auto',
      margin: theme.spacing.unit,
    }
  });

export function Main (props){
    const { classes } = props;
    let role = props.role;
    console.log(role);
    let summary = null;
    let managelinks = '';
    if(role === 'admin'){
        managelinks = 
        <Grid container align="center" className={classes.btnContainer}>
            <Grid item xs={12} sm={6}>
                <Button 
                variant="outlined" 
                component={Link}
                to="/products"
                color="secondary" 
                className={classes.btnStyle}>
                    Manage Products</Button>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Button
                variant="outlined" 
                component={Link}
                to="/users"
                color="secondary" 
                className={classes.btnStyle}>
                 Manage Users</Button>
            </Grid>
        </Grid>;
        summary = <AllIssues />;
    } else
        summary = <MyBugs />

    return (
        <Grid container justify='center'>
            <Grid item xs={12} sm={10}>
                {summary}
                {managelinks}
            </Grid>
        </Grid>
    )
}


export default RequiresLogin()(withStyles(styles)(Main));
