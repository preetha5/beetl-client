import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as productActions from '../../../actions/productActions';
import * as userActions from '../../../actions/userActions';
import * as bugActions from '../../../actions/bugActions';
import {bindActionCreators} from 'redux';
/* Material UI imports */
import Grid from '@material-ui/core/Grid';
import {DatePicker} from 'redux-form-material-ui'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        paddingLeft: 40,
        [theme.breakpoints.up('sm')]: {
            paddingLeft: 50,
          },
        marginBottom: 150,
        backgroundColor: 'white',
        display: 'flex',
        flexWrap: 'wrap',
      },
    field:{
        marginBottom: 10,
    },
    label:{
        width: 90,
        [theme.breakpoints.up('sm')]: {
            width: 120,
          },
    },
    dateItem:{
        float: 'left',
        border:'none'
    },
    dateGrid:{
        display:'inherit',
    },
    btnStyle : {
        marginRight: '1em'
      },
    btnDiv : {
        marginTop: '1em',
        [theme.breakpoints.up('xs')]: {
            marginTop: '4em',
          },
        marginBottom: 10,
        textAlign: 'center'
    },
    input:{
        border: "solid 1px",
        height: 35,
        width:200,
        paddingLeft: 5,
    }
  });

class EditBugForm extends React.Component {
    constructor(props){
        super(props);
        this.handleStartDateChange = this.handleStartDateChange.bind(this);
    }
    componentWillMount(){
        console.log(this.props);
        this.props.actions.loadProducts();
        this.props.actions.loadUsers();
    }

    handleStartDateChange(event, date){
        console.log("changing date..", date);
    }

    render(){
    const { classes, handleSubmit, pristine, reset, submitting } = this.props;
    console.log(this.props);
    var newdate = new Date(this.props.currentBug && this.props.currentBug.dueDate);
    console.log(this.props.currentBug && this.props.currentBug.dueDate);
    console.log(newdate)
 
    return (
        <form onSubmit={handleSubmit} className={classes.root}>
            <Grid item xs={12} className={classes.field}>
                <p><strong>Bug Number : {this.props.currentBug && this.props.currentBug.bugId}</strong></p>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.field}>
                <label className={classes.label}>Product</label>
                <Field name="productId" component="select" className={classes.input}>
                    <option value="">Select a Product...</option>
                    {this.props.products.map(product => (
                    <option value={product._id} 
                        key={product._id}>
                        {product.name}
                    </option>
                    ))}
                </Field>
            </Grid>
        <Grid item xs={12} sm={6} className={classes.field}>
            <label className={classes.label}>Version</label>
            <Field
                name="version"
                component="input"
                type="text"
                placeholder="1.0"
                className={classes.input}
                />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.field}>
            <label className={classes.label}>Component</label>
            <Field
                name="component"
                component="input"
                type="text"
                className={classes.input}
            />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.field}>
            <label className={classes.label}>Bug Title</label>
            <Field
                name="title"
                component="input"
                type="text"
                className={classes.input}
            />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.field}>
            <label className={classes.label}>Bug Description</label>
            <Field
                name="description"
                component="input"
                type="text"
                className={classes.input}
            />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.field}>
            <label className={classes.label}>Severity</label>
            <Field name="severity" component="select" className={classes.input}>
                <option value="">Select a color...</option>
                {['low', 'medium', 'high'].map(item => (
                <option value={item} key={item}>
                    {item}
                </option>
                ))}
            </Field>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.field}>
            <label className={classes.label}>Priority</label>
            <Field name="priority" component="select" className={classes.input}>
                {['p1', 'p2', 'p3'].map(item => (
                <option value={item} key={item}>
                    {item.toUpperCase()}
                </option>
                ))}
            </Field>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.field}>
            <label className={classes.label}>Status</label>
            <Field name="status" component="select" className={classes.input}>
                {['open', 'in-progress', 'fixed', 'built', 'closed'].map(item => (
                <option value={item} key={item}>
                    {item}
                </option>
                ))}
            </Field>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.field}>
            <label className={classes.label}>Reporter</label>
            <Field name="reporter" component="select" className={classes.input}>
                <option value="">Select a User...</option>
                {this.props.users.map(user => (
                <option value={user.id} 
                    key={user.id}>
                    {user.email}
                </option>
                ))}
            </Field>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.field}>
            <label className={classes.label}>Assignee</label>
            <Field name="assignee" component="select" className={classes.input}>
                <option value="">Select a Assignee...</option>
                {this.props.users.map(user => (
                <option value={user.id} 
                    key={user.id}>
                    {user.email}
                </option>
                ))}
            </Field>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.dateGrid}>
            <label className={classes.label}>Due Date</label>
            <Field
                name="dueDate"
                component={DatePicker}
                className={classes.dateItem}
                format={value => value ? new Date(value) : null}
            />
        </Grid>
        <Grid item xs={12} className={classes.btnDiv}>
        <Button 
            variant="raised" 
            color="primary" 
            className={classes.btnStyle} 
            type="submit" 
            disabled={pristine || submitting}>
            Save</Button>
            <Button
                variant="raised"
                className={classes.btnStyle}
                type="button"
                disabled={pristine || submitting}
                onClick={reset}
            >
            Undo Changes
            </Button>
            <Button
                variant="raised"
                className={classes.btnStyle}
                type="button"
                onClick={this.props.onDelete}>
                Delete
            </Button>
        </Grid>
        </form>
        );//End return
    };//End render()
};//End Class EditForm

const mapDispatchToProps = (dispatch) => {
    return {
    actions: bindActionCreators(Object.assign(
        {}, bugActions, productActions, userActions), dispatch)
    };
    }

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
EditBugForm = reduxForm({
  form: 'initializeFromState', // a unique identifier for this form
})(EditBugForm);

EditBugForm = connect(
    (state, ownProps) => ({
      initialValues: {
        productId :ownProps.currentBug && ownProps.currentBug.productId._id,
        version:ownProps.currentBug && ownProps.currentBug.version,
        title:ownProps.currentBug && ownProps.currentBug.title,
        description:ownProps.currentBug && ownProps.currentBug.description,
        component:ownProps.currentBug && ownProps.currentBug.component,
        severity:ownProps.currentBug && ownProps.currentBug.severity,
        priority:ownProps.currentBug && ownProps.currentBug.priority,
        status:ownProps.currentBug && ownProps.currentBug.status,
        reporter : ownProps.currentBug && ownProps.currentBug.reporter._id,
        assignee :ownProps.currentBug && ownProps.currentBug.assignee._id,
        dueDate : ownProps.currentBug && ownProps.currentBug.dueDate
      },
      products: state.productsReducer.products,
      users: state.usersReducer.users,
      enableReinitialize: true
    }), mapDispatchToProps
  )(EditBugForm)

  export default withStyles(styles)(EditBugForm);
