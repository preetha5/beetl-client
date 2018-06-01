import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import {bindActionCreators} from 'redux';
import * as Actions from '../../../actions/bugActions';
import NewBugForm from './newBugForm';
import Grid from '@material-ui/core/Grid';

class CreateIssue extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        bug:{
            bugId:"",
            productId:"",
            version:"",
            component:"",
            title:"", 
            description:"",
            severity:"",
            "priority":"",
            "dueDate":"",
            "reporter":"",
            "assignee":"",
            "status":""
        },
        adding:false
    }
    this.createBug = this.createBug.bind(this);
    this.updateBugState = this.updateBugState.bind(this);
    this.createBugId = this.createBugId.bind(this);
    }

    createBugId(){
        let uniqueNumber  = 0;
        var id = Date.now();
        if (id <= uniqueNumber) {
            id = ++uniqueNumber;
        } else {
            uniqueNumber = id;
        }
        return id;
    }

    createBug(event){
        event.preventDefault();
        this.state.bug.bugId = this.createBugId();
        console.log(this.state.bug);
        this.props.actions.createBug(this.state.bug);
        this.setState(
            {adding:true}
        );
    }

    updateBugState = (field) => event =>{
        //const field = name;
        const bug = this.state.bug;
        console.log(bug);
        bug[field] = event.target.value;
        console.log(bug);
        return this.setState({bug: bug});
      }
    
    updateSelectField = event => {
        const bug = this.state.bug;
        console.log("inside update slect field", event);
        bug[event.target.name] = event.target.value;
        console.log(bug);
        return this.setState({ bug: bug });
      };

    render(){
        // if(this.state.adding){
        //     return( <Redirect to="/bugs" />);
        //  }
        console.log(this.state.bug);
        return(
            <Grid container>
                <Grid item xs={12} sm={10}>
                    <h1 className="textCenter" >Create Issue</h1>
                </Grid>
                <Grid item xs={12} sm={10}>
                    <NewBugForm 
                    bug={this.state.bug}
                    onSubmit={this.createBug}
                    onChange= {field =>this.updateBugState(field) } 
                    selectChange = {e =>{this.updateSelectField(e)}}
                    />
                </Grid>
            </Grid>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(Actions, dispatch)
    };
  }

export default connect(null, mapDispatchToProps)(CreateIssue);