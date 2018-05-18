import React from 'react';
import './sidebar.css';
import {Route, Link, Redirect} from 'react-router-dom';
import Dashboard from '@material-ui/icons/Dashboard';
import Create from '@material-ui/icons/Create';
import ViewList from '@material-ui/icons/ViewList';
import HelpOutline from '@material-ui/icons/HelpOutline';
import MenuItem from 'material-ui/MenuItem';

export default function Sidebar(props) {
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
                    <Link className="sidebar-menu-list-item" to="/"><Dashboard/></Link>
                    <Link className="sidebar-menu-list-item" to="/create_issue"><Create/></Link>
                    <Link className="sidebar-menu-list-item" to="/view_issues"><ViewList/></Link>
                    <Link className="sidebar-menu-list-item" to="/help"><HelpOutline/></Link>
                </ul>
            </nav>
        </div>
    );
}
