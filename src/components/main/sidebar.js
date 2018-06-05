import React from 'react';
import './sidebar.css';
import {Route, Link, Redirect} from 'react-router-dom';
import Dashboard from '@material-ui/icons/Dashboard';
import Create from '@material-ui/icons/Create';
import ViewList from '@material-ui/icons/ViewList';
import HelpOutline from '@material-ui/icons/HelpOutline';
import MenuItem from 'material-ui/MenuItem';
import RequiresLogin from '../requires-login';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
    active: {
      backgroundColor: 'rgba(255, 255, 255, 0.12)',
    }
  })

export function Sidebar(props) {
    const { classes } = props;
    const sideMenuList = ['Dashboard', 'Create Issue', 'View Issues', 'Documentation']
    const links = sideMenuList.map((menu ,index) =>
        <li key={index} className="folder-menu-list-item">
            {menu}
        </li>
    );

    return (
        <div className="sidebar sidebar-left">
            <nav className="sidebar-menu">
                <ul className="sidebar-menu-list">
                    <Link className="sidebar-menu-list-item" to="/dashboard">
                        <Tooltip id="dashboard-icon" title="Dashboard" placement="right">
                            <Dashboard aria-label="dashboard"/></Tooltip>
                    </Link>
                    <Link className="sidebar-menu-list-item" to="/create_issue">
                    <Tooltip id="create-icon" title="Create Bug" placement="right">
                        <Create/></Tooltip></Link>
                    <Link className="sidebar-menu-list-item" to="/view_issues">
                    <Tooltip id="view-bugs-icon" title="View Bugs" placement="right">
                        <ViewList/></Tooltip></Link>
                    <Link className="sidebar-menu-list-item" to="/help">
                    <Tooltip id="help-icon" title="Help" placement="right">
                        <HelpOutline/></Tooltip></Link>
                </ul>
            </nav>
        </div>
    );
}

export default RequiresLogin()(Sidebar);
