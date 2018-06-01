import React, {Component} from 'react';
import {connect} from 'react-redux';
import './index.css';
import logo from './logo.svg';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import Close from 'material-ui/svg-icons/navigation/close';
import {Route, Link, Redirect} from 'react-router-dom';
import {withRouter} from 'react-router';
import Login from '../login';
import {clearAuth} from '../../actions/auth';
import {clearAuthToken} from '../../utils/localStorage';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

// easy and its affecting the styles of Mui-UI
const logo_style = {
    flexGrow: 1,
    padding: '0 2rem 0rem 1rem',
    fontFamily: 'Kanit, sans-serif',
    fontWeight: 800,
    letterSpacing: '.2rem',
    fontSize: '1em'
};

export class Header extends Component{
    constructor(props){
        super(props);
        this.state ={
            open: false,
        }
     this.handleTitleClick = this.handleTitleClick.bind(this);
    }

    handleTitleClick() {
        alert("Title clicked..going home!");
        this.context.history.push('/');
        }

    handleToggle = () => {
        this.setState({open: !this.state.open});
    }

    closeMenu = () => { 
        this.setState({open: false});
    }

    logOut = () => {
        console.log("Logging out :going to clear auth");
        clearAuthToken();
        this.props.dispatch(clearAuth());
        this.setState({open: false});
    }

    render(){
        console.log("inside header loggedin", this.props.loggedIn);
        const menulinks = this.props.loggedIn? (
            <div>
                <MenuItem><Link to="/" onClick={this.closeMenu}>Dashboard</Link></MenuItem>
                <MenuItem><Link to="/create_issue" onClick={this.closeMenu}>Create Issue</Link></MenuItem>
                <MenuItem><Link to="/view_issues" onClick={this.closeMenu}>View Issues</Link></MenuItem>
                <MenuItem><Link to="/help" onClick={this.closeMenu}>Help</Link></MenuItem>
                <MenuItem><Link to="/logout" onClick={this.logOut}>Log Out</Link></MenuItem>
            </div>)

            :(<div>
                <MenuItem><Link to="/login" onClick={this.closeMenu}>Login</Link></MenuItem>
                <MenuItem><Link to="/signup" onClick={this.closeMenu}>Sign Up</Link></MenuItem>
            </div>);
        
        return (
            <div>
                <AppBar 
                    title={<Link style={logo_style} to="/">BEETLE</Link>}
                    iconElementLeft={
                        <IconButton 
                        onClick={this.handleToggle}>{this.state.open ? <Close /> : <Menu />}</IconButton>}>
                </AppBar>
                <Drawer width={200} openSecondary={true} open={this.state.open}>
                    {menulinks}
                </Drawer>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loggedIn: state.authReducer.currentUser !== null
});


export default connect(mapStateToProps)(Header);