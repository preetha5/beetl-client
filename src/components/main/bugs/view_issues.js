import React, {Component} from 'react';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {BootstrapTable, 
    TableHeaderColumn} from 'react-bootstrap-table';
import '../../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'
import RequiresLogin from '../../requires-login';
import * as bugActions from '../../../actions/bugActions';
import * as productActions from '../../../actions/productActions';
import * as userActions from '../../../actions/userActions';
import {bindActionCreators} from 'redux';

// Material UI
import blueGrey from '@material-ui/core/colors/blueGrey';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

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
        textAlign: 'center'
      }
  });

function bugIdFormatter(cell, row){
    console.log('calling formatter', {cell});
    return (
        <Link to={`/view_issues/${cell}`}>{cell}</Link>
    );
}

class Table1 extends Component {

    render() {
        return (
        <div>
                <BootstrapTable data={this.props.data} responsive search searchPlaceholder='Enter search...' version='4'>
                    <TableHeaderColumn dataField='bugId' 
                        dataFormat={bugIdFormatter} isKey={true}>
                    BUG ID
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='title' >
                    Title
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='productName' >
                    Product
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='status' >
                    Status
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='assigneeName' >
                    Assignee
                    </TableHeaderColumn>
                </BootstrapTable>
        </div>
      );
    }
  }

export class ViewIssues extends Component{
    componentWillMount(){
        console.log(this.props);
        this.props.actions.loadBugs();
        this.props.actions.loadProducts();
        this.props.actions.loadUsers();
    }

    render(){
    const { classes } = this.props;
    
    //Function to prep incoming bugObject with additional data fields
    const buglist = this.props.bugs && this.props.bugs.map(bug =>{
        
        let _bug = bug;
        console.log(bug);
       _bug['productName'] = bug.productId.name;
       _bug['assigneeName'] = bug.assignee.email;
        
        return _bug;
    })

    return(
        <div>
        <Grid container>
            <Grid item xs={12} style={{textAlign: 'center'}}>
                <h1 className={classes.headline}>View (or) Search Issues</h1>
                <Paper className={classes.root} elevation={4}>
                    <Table1 data={buglist}/>
                </Paper>
        </Grid>
        </Grid>
        </div>
    )
    }
}

// AllIssues.propTypes = {
//     classes: propTypes.object.isRequired
// }

const mapStateToProps = (state) => {
    console.log(state);
    return {
        bugs:state.bugsReducer.bugs,
        products:state.productsReducer.products,
        users:state.usersReducer.users
    }   
}

const mapDispatchToProps = (dispatch) => {
    return {
    actions: bindActionCreators(Object.assign(
        {}, bugActions, productActions, userActions), dispatch)
    };
    }

export default RequiresLogin()(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ViewIssues)));

//export default connect(mapStateToProps, mapDispatchToProps)(CreateIssue);