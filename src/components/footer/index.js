import React, {Component} from 'react';

import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import amber from '@material-ui/core/colors/amber';

import './index.css';

const styles = {
  logo: {
    fontFamily: 'Kanit, sans-serif',
    fontWeight: 800,
    letterSpacing: '.2rem',
    whiteSpace: 'pre-wrap',
    color: '#216afa',
    paddingBottom: '2.5rem',
    marginLeft: '4rem',

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
  },
  bug:{
    position: 'absolute',
    backgroundColor: amber[500],
    backgroundImage: `url(static/images/tiny_bug.png)`,  // The preferred way
    backgroundRepeat: 'no-repeat',
    backgroundSize: '60%',
    backgroundPosition: 'center'
  }
};


function Footer(props){
  const { classes } = props;

  return(
    <Grid container className="footer">
        <Grid item xs={12}>
	      	<Grid item xs={12} sm={6} md={6}>
            <Avatar alt="" className={classes.bug} />
            <h6 className={classes.logo}>BEETL {"\n"}<span className={classes.tagline}>A Lightweight Bug Tracking System</span></h6>
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
