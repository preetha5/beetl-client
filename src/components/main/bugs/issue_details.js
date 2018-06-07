import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import * as bugActions from '../../../actions/bugActions';
import * as productActions from '../../../actions/productActions';
import * as userActions from '../../../actions/userActions';
import {bindActionCreators} from 'redux';
import EditBugForm from './editBugForm';

/* MAterial UI */
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';

const styles = theme => ({
    root: theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      marginTop: theme.spacing.unit * 3,
    }),
    headline: {
        fontFamily: 'Libre Franklin, sans-serif',
        fontWeight: 500,
        letterSpacing: '0',
        color: blueGrey[300],
        paddingBottom: '5px',
        marginTop: '20px',
        marginBottom: '2rem',
        textAlign: 'center'
      }
  });

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
        const { classes } = this.props;

        if(this.state.redirect){ 
            return (<Redirect to='/view_issues' />);
        }

        return(
            <section>
                <Grid item xs={12} sm={10}>
                    <h1 className={classes.headline} >Bug Details</h1>
                </Grid>
                <Grid container spacing={0} justify="center" >
                    <Grid item xs={12}>
                        <EditBugForm currentBug={this.props.bug} 
                        onSubmit={this.saveForm} 
                        onDelete={this.deleteBug}/>
                    </Grid>
                </Grid>
                {/*<Grid item xs={12} sm={10}>
                    <EditForm products={products} users={users} 
                        bugId={props.match.params.bugId} buttonName="Edit Issue"/>
        </Grid>*/}
                
            </section>
        )
    }
}

const mapStateToProps = (state, props) => {
    const bugNumber = props.match.params.bugId;
    console.log(bugNumber);
    const currentBug = state.bugsReducer.bugs.find(bug =>
        bug.bugId === bugNumber);
    console.log(currentBug);
    return {bug:currentBug , bugNumber};  
};

const mapDispatchToProps = (dispatch) => {
    return {
    actions: bindActionCreators(Object.assign(
        {}, bugActions, productActions, userActions), dispatch)
    };
    }

export default  withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(IssueDetails));
