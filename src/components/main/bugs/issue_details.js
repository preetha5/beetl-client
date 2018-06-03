import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import RequiresLogin from '../../requires-login';
import * as bugActions from '../../../actions/bugActions';
import * as productActions from '../../../actions/productActions';
import * as userActions from '../../../actions/userActions';
import {bindActionCreators} from 'redux';
import EditBugForm from './editBugForm';

//import ViewBugForm from '../../utils/viewBugForm';
import Grid from '@material-ui/core/Grid';



export class IssueDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            redirect:false
        }
        this.updateSelectField = this.updateSelectField.bind(this);
        this.saveForm = this.saveForm.bind(this);
        this.deleteBug = this.deleteBug.bind(this);
    }
    
    componentWillMount(){
        console.log(this.props);
        this.props.actions.loadBugs();
    }

    updateTextField = (name) => event =>{
        const field = name;
        console.log(name, event);
        const bug = this.props.bug; 
        bug[field] = event.target.value;
        console.log("updating input for product", bug)
        this.props.actions.updateBugField(bug);  
    }

    updateSelectField = event => {
        const bug = this.props.bug;
        console.log("inside update slect field", event);
        bug[event.target.name] = event.target.value;
        console.log(bug);
        return this.setState({ bug: bug });
      };
    
    saveForm (values){
        console.log("submitting form..", values);
        const updatedBug = values;
        this.props.actions.updateBug(
            this.props.bug._id, updatedBug);
        this.setState(
             {redirect:true});
    }

    //Delete the current bug from the DB
    deleteBug(){
        console.log("deleting bug number..", this.props.bugNumber);
        this.props.actions.deleteBug(this.props.bugNumber);
        this.setState({
            redirect:true
        })
    }
    
    render(){
        if(this.state.redirect){ 
            return (<Redirect to='/view_issues' />);
        }

        return(
            <Grid container>
                <Grid item xs={12} sm={10}>
                    <h1 className="textCenter" >Bug Details</h1>
                </Grid>
                {/* <Grid item xs={12} sm={10}>
                    <EditBugForm 
                    currentBug={this.props.bug} 
                    products={products} 
                    users={users} 
                    buttonName="Edit Issue"
                    bugNumber = {this.props.bugNumber}
                    onChange= {field =>this.updateTextField(field)}
                    selectChange = {e =>{this.updateSelectField(e)}}
                    />
                </Grid> */}
                <Grid item>
                    <EditBugForm currentBug={this.props.bug} 
                    onSubmit={this.saveForm} 
                    onDelete={this.deleteBug}/>
                </Grid>
                {/*<Grid item xs={12} sm={10}>
                    <EditForm products={products} users={users} 
                        bugId={props.match.params.bugId} buttonName="Edit Issue"/>
        </Grid>*/}
                
            </Grid>
        )
    }
}

const mapStateToProps = (state, props) => {
    const bugNumber = props.match.params.bugId;
    const currentBug = state.bugsReducer.bugs.find(bug =>
        bug.bugId === bugNumber);
    return {bug:currentBug , bugNumber};  
};

const mapDispatchToProps = (dispatch) => {
    return {
    actions: bindActionCreators(Object.assign(
        {}, bugActions, productActions, userActions), dispatch)
    };
    }

export default connect(mapStateToProps, mapDispatchToProps)(IssueDetails);
