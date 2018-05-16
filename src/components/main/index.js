import React, {Component} from 'react';
import AllIssues from './allIssues';
import MyBugs from './myBugs';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export class Main extends Component{
    constructor(props){
        super(props);
    }
    render(){
        
        let role = this.props.role;
        console.log(role);
        let summary = null;
        if(role === 'admin'){
            summary = <AllIssues item="hello" />;
        } else
            summary = <MyBugs />

        return (
            <Router>
                <div>
                    {summary}
                </div>
            </Router>
        )
    }
}