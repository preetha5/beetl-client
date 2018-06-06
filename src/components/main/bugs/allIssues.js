import React, {Component} from 'react';
import propTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {BootstrapTable, 
    TableHeaderColumn} from 'react-bootstrap-table';
import '../../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'
// Material UI
import blueGrey from '@material-ui/core/colors/blueGrey';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import * as productActions from '../../../actions/productActions';
import RequiresLogin from '../../requires-login';
import deepPurple from '@material-ui/core/colors/deepPurple';

const styles = theme => ({
    root: theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      marginTop: theme.spacing.unit * 3,
    }),
    dashboard:{
        
    },
    headline: {
        fontFamily: 'Libre Franklin, sans-serif',
        fontWeight: 500,
        letterSpacing: '0',
        color: blueGrey[300],
        paddingBottom: '5px',
        marginTop: '20px'
      },
  });
  const  headerStyle ={
    background:'deepPurple'
  }

class Table1 extends Component {
    render() {
        return (
        <div>
                <BootstrapTable data={this.props.data} responsive>
                    <TableHeaderColumn columnTitle isKey 
                        dataField='productName' 
                        style={ headerStyle }
                        tdStyle={ { whiteSpace: 'normal'} }>
                    Product
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='total'>
                    Total Bugs
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='open'>
                    Open
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='in-progress'>
                    InProgress
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='fixed'>
                    Fixed
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='closed'>
                    Closed
                    </TableHeaderColumn>
                </BootstrapTable>
        </div>
      );
    }
  }


export class AllIssues extends Component{

    componentWillMount(){
        console.log(this.props);
        this.props.actions.loadProducts();
    }

    render(){

        const { classes } = this.props;

        const bugSummary = this.props.products && this.props.products.map(product =>{
        
            let _product = product;
            let buglist = product.bugList;
            _product['productName'] = product.name;
            _product['total'] = product.bugList.length;
            _product['open'] = (buglist.filter(bug => bug.status === 'open')).length;
            _product['in-progress'] = (buglist.filter(bug => bug.status === 'inProgress')).length;
            _product['fixed'] = (buglist.filter(bug => bug.status === 'fixed')).length;
            _product['closed'] = (buglist.filter(bug => bug.status === 'closed')).length;
            
            return _product;
        })

        return(
            <div>
            <Grid container align="center">
                <Grid item xs={12} className={classes.dashboard}>
                    <h1 className={classes.headline}>Issues at a glance</h1>
                    <Paper className={classes.root} elevation={4}>
                        <Table1 data={bugSummary}/>
                    </Paper>
            </Grid>
            </Grid>
            </div>
    )
    }//End Render()
}//End AllIssues Class

AllIssues.propTypes = {
    classes: propTypes.object.isRequired
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        products:state.productsReducer.products
    }   
}

const mapDispatchToProps = (dispatch) => {
    return {
    actions: bindActionCreators(Object.assign(
        {}, productActions), dispatch)
    };
    }

export default RequiresLogin()(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(AllIssues)));
