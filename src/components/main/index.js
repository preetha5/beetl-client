import React, {Component} from 'react';
import AllIssues from './allIssues';
import MyBugs from './myBugs';
import {Link} from 'react-router-dom';
import RequiresLogin from '../requires-login';

// Material ui import
import MenuItem from 'material-ui/MenuItem';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import './index.css';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    container: {
      display: 'flex',
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
      flex: '1 0 auto',
      margin: theme.spacing.unit,
    },
  });

export function Main (props){
    const { classes } = props;
    let role = props.role;
    console.log(role);
    let summary = null;
    let managelinks = '';
    if(role === 'admin'){
        managelinks = <div>
        <MenuItem><Link to="/products" >Manage Products</Link></MenuItem>
        <MenuItem><Link to="/users" >Manage Users</Link></MenuItem>
        </div>;
        summary = <AllIssues item="hello" />;
    } else
        summary = <MyBugs />

    return (
        <Grid item xs={12} sm={10}>
            {summary}
            {managelinks}
        </Grid>
    )
}

export default RequiresLogin()(Main);
