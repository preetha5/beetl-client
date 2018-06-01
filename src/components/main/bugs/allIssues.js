import React, {Component} from 'react';
import propTypes from 'prop-types';
import {BootstrapTable, 
    TableHeaderColumn} from 'react-bootstrap-table';
import '../../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'
// Material UI
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      marginTop: theme.spacing.unit * 3,
    }),
  });

class Table1 extends Component {
    render() {
        return (
        <div>
                <BootstrapTable data={this.props.data} responsive>
                    <TableHeaderColumn columnTitle isKey 
                        dataField='product' tdStyle={ { whiteSpace: 'normal'} }>
                    Product
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='total'>
                    Total Bugs
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='open'>
                    Open
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='progress'>
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

  let data = [
    {product: 'Salt shaker', total: 10, open: 2, progress: 5, fixed:3, closed:0},
    {product: 'Water Filter', total: 5, open: 1, progress: 2, fixed: 2, closed:0}
  ];

function AllIssues(props){
    const { classes } = props;
    return(
        <div>
        <Grid container>
            <Grid item xs={12} style={{textAlign: 'center'}}>
                <h2>Issues at a glance</h2>
                <Paper className={classes.root} elevation={4}>
                    <Table1 data={data}/>
                </Paper>
        </Grid>
        </Grid>
        </div>
    )
}

AllIssues.propTypes = {
    classes: propTypes.object.isRequired
}

export default withStyles(styles)(AllIssues);