import React from 'react';
import './sidebar.css';
import {Link} from 'react-router-dom';
import Dashboard from '@material-ui/icons/Dashboard';
import Create from '@material-ui/icons/Create';
import ViewList from '@material-ui/icons/ViewList';
import HelpOutline from '@material-ui/icons/HelpOutline';
import RequiresLogin from '../requires-login';
import Tooltip from '@material-ui/core/Tooltip';

export function Sidebar(props) {

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
