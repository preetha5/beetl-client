import React, {Component} from 'react';
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

    closeMenu() { 
        this.setState({open: false});
    }
    
    render(){
    const menulinks = this.props.loggedIn? (
        <div>
            <MenuItem><a href="#">Create Issue</a></MenuItem>
            <MenuItem><a href="#">View Issue</a></MenuItem>
            <MenuItem><a href="#">Documentation</a></MenuItem>
            <MenuItem><a href="#">Log Out</a></MenuItem>
        </div>):
        (<div>
            <MenuItem><Link to="/login" onClick={this.closeMenu}>Login</Link></MenuItem>
            <MenuItem><Link to="/signup">Sign Up</Link></MenuItem>
        </div>);
    return (
        <div>
            <AppBar 
                title={<Link to="/">Beetl</Link>}
                iconElementLeft={<IconButton 
                    onClick={this.handleToggle}>{this.state.open ? <Close /> : <Menu />}</IconButton>}>
            </AppBar>
            <Drawer width={200} openSecondary={true} open={this.state.open}>
                {menulinks}
            </Drawer>
        </div>
    )
    }
}