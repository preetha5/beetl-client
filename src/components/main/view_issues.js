import React, {Component} from 'react';
import propTypes from 'prop-types';
import {BootstrapTable, 
    TableHeaderColumn} from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'
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
                    <TableHeaderColumn isKey dataField='issueId'>
                    Issue ID
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='title'>
                    Title
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='product'>
                    Product
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='status'>
                    Status
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='assignee'>
                    Assignee
                    </TableHeaderColumn>
                </BootstrapTable>
        </div>
      );
    }
  }

  let data = [
    {issueId: 334455, title: "scan head cracked", product: "Scanner", status: 'open', assignee: "Joe Dev"},
    {issueId: 334456, title: "Mirror not reflecting well", product: "Scanner", status: 'in-progress', assignee: "Alisha Dev"},
    {issueId: 334455, title: "scan head cracked", product: "Scanner", status: 'open', assignee: "Joe Dev"},
    {issueId: 334456, title: "Mirror not reflecting well", product: "Scanner", status: 'in-progress', assignee: "Alisha Dev"},
    {issueId: 334455, title: "scan head cracked", product: "Scanner", status: 'open', assignee: "Joe Dev"},
    {issueId: 334456, title: "Mirror not reflecting well", product: "Scanner", status: 'in-progress', assignee: "Alisha Dev"},
   ];

function AllIssues(props){
    const { classes } = props;
    return(
        <div>
        <Grid container>
            <Grid item xs={12} style={{textAlign: 'center'}}>
                <h2>View (or) Search Issues</h2>
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