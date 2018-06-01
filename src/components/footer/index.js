import React, {Component} from 'react';

import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';


import './index.css';

const styles = {
  logo: {
    fontFamily: 'Kanit, sans-serif',
    fontWeight: 800,
    letterSpacing: '.2rem',
    whiteSpace: 'pre-wrap',
    color: '#0057ff',
    paddingBottom: '2.5rem'

  },
  tagline: {
    fontFamily: 'Libre Franklin, sans-serif',
    fontWeight: 400,
    letterSpacing: '0',
    color: blueGrey[200],
  },
  legalease: {
  	color: blueGrey[600],
  	fontSize: '.75rem',
  }
};


function Footer(props){
  const { classes } = props;

  return(
    <Grid container className="footer">
        <Grid item xs={12}>
	      	<Grid item xs={12} sm={6} md={6}>
	      		<h6 className={classes.logo}>BEETLE {"\n"}<span className={classes.tagline}>A Lightweight Bug Tracking System</span></h6>
					</Grid>
					<Grid item xs={12} sm={6} md={6}>
						<p className={classes.legalease}>Copyright &copy; 2018 | Beetl Inc </p>
					</Grid>
        </Grid>
    </Grid>
	)
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Footer);
