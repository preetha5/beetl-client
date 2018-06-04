import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as productActions from '../../../actions/productActions';
import * as userActions from '../../../actions/userActions';
import * as bugActions from '../../../actions/bugActions';
import {bindActionCreators} from 'redux';
import moment from 'moment';
import momentLocalizer from "react-widgets-moment";

import {DatePicker} from 'redux-form-material-ui'

momentLocalizer(moment);

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
    const { handleSubmit, pristine, reset, submitting } = this.props;
    console.log(this.props);
    var newdate = new Date(this.props.currentBug && this.props.currentBug.dueDate);
    console.log(this.props.currentBug && this.props.currentBug.dueDate);
    console.log(newdate)
 
    return (
        <form onSubmit={handleSubmit} className="bugForm">
        <p><strong>Bug Number : {this.props.currentBug && this.props.currentBug.bugId}</strong></p>
        <div>
            <label>Product</label>
            <div>
            <Field name="productId" component="select">
                <option value="">Select a Product...</option>
                {this.props.products.map(product => (
                <option value={product._id} 
                    key={product._id}>
                    {product.name}
                </option>
                ))}
            </Field>
            </div>
        </div>
        <div>
            <label>Version</label>
            <div>
            <Field
                name="version"
                component="input"
                type="text"
                placeholder="1.0"
            />
            </div>
        </div>
        <div>
            <label>Component</label>
            <div>
            <Field
                name="component"
                component="input"
                type="text"
            />
            </div>
        </div>
        <div>
            <label>Bug Title</label>
            <div>
            <Field
                name="title"
                component="input"
                type="text"
            />
            </div>
        </div>
        <div>
            <label>Bug Description</label>
            <div>
            <Field
                name="description"
                component="input"
                type="text"
            />
            </div>
        </div>
        <div>
            <label>Severity</label>
            <div>
            <Field name="severity" component="select">
                <option value="">Select a color...</option>
                {['low', 'medium', 'high'].map(item => (
                <option value={item} key={item}>
                    {item}
                </option>
                ))}
            </Field>
            </div>
        </div>
        <div>
            <label>Priority</label>
            <div>
            <Field name="priority" component="select">
                {['p1', 'p2', 'p3'].map(item => (
                <option value={item} key={item}>
                    {item.toUpperCase()}
                </option>
                ))}
            </Field>
            </div>
        </div>
        <div>
            <label>Status</label>
            <div>
            <Field name="status" component="select">
                {['open', 'in-progress', 'fixed', 'built', 'closed'].map(item => (
                <option value={item} key={item}>
                    {item}
                </option>
                ))}
            </Field>
            </div>
        </div>
        <div>
            <label>Reporter</label>
            <div>
            <Field name="reporter" component="select">
                <option value="">Select a User...</option>
                {this.props.users.map(user => (
                <option value={user.id} 
                    key={user.id}>
                    {user.email}
                </option>
                ))}
            </Field>
            </div>
        </div>
        <div>
            <label>Assignee</label>
            <div>
            <Field name="assignee" component="select">
                <option value="">Select a Assignee...</option>
                {this.props.users.map(user => (
                <option value={user.id} 
                    key={user.id}>
                    {user.email}
                </option>
                ))}
            </Field>
            </div>
        </div>
        <div>
            <Field
            name="dueDate"
            floatingLabelText="Due Date"
            component={DatePicker}
            format={value => value ? new Date(value) : null}
            hintText="Due Date"
        />
        </div>
        <div>
            <button type="submit" disabled={pristine || submitting}>Submit</button>
            <button type="button" disabled={pristine || submitting} onClick={reset}>
            Undo Changes
            </button>
            <button type="button" onClick={this.props.onDelete}>Delete</button>
        </div>
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

export default EditBugForm;
