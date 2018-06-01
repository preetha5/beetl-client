import React from 'react';
import {connect} from 'react-redux';
import RequiresLogin from '../../requires-login';
import * as bugActions from '../../../actions/bugActions';
import * as productActions from '../../../actions/productActions';
import * as userActions from '../../../actions/userActions';
import {bindActionCreators} from 'redux';

//import ViewBugForm from '../../utils/viewBugForm';
import Grid from '@material-ui/core/Grid';

import EditForm from './editForm';

export class IssueDetails extends React.Component{
    constructor(props){
        super(props);
    }
    
    componentWillMount(){
        console.log(this.props);
        this.props.actions.loadBugs();
        this.props.actions.loadProducts();
        this.props.actions.loadUsers();
    }

    render(){
        const products = [{
            id:"printer",
            productName:"Printer",
            components:['Drum','Power supply','Paper Transport','Corona', 'Controller']
        },
        {
            id:"scanner",
            productName:"Scanner",
            components:['Mirror','Glass Plate','Filter','Scan Head', 'CCD Array']


        }];

        const users = ["Joe Dev", "Alisha Dev", "Kevin Test", "Maya Test"]
        return(
            <Grid container>
                <Grid item xs={12} sm={10}>
                    <h1 className="textCenter" >Bug Details</h1>
                </Grid>
                <Grid item xs={12} sm={10}>
                    <EditForm currentBug={this.props.bug} products={products} users={users} buttonName="Edit Issue"/>
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
    console.log(state.bugsReducer.bugs);
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

export default connect(mapStateToProps, mapDispatchToProps)(IssueDetails);
