import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field,select, reduxForm, formValueSelector} from 'redux-form';
import {bindActionCreators} from 'redux';
import * as productActions from '../../../actions/productActions';
import * as userActions from '../../../actions/userActions';

/* Material UI */
import { withStyles } from '@material-ui/core/styles';
import {RadioButton} from 'material-ui/RadioButton';
import MenuItem from 'material-ui/MenuItem';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import {AutoComplete as MUIAutoComplete} from 'material-ui';
import {
  AutoComplete,
  Checkbox,
  DatePicker,
//   TimePicker,
//   RadioButtonGroup,
  //SelectField,
 // Slider,
  TextField,
  //Toggle,
  DropDownMenu
} from 'redux-form-material-ui';
import SelectField from 'material-ui/SelectField';
import Select from '@material-ui/core/Select';
//import {renderSelectField} from './material-ui-form.js';

// validation functions
const required = value => (value == null ? 'Required' : undefined);
const email = value =>
  (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined);
const tooManyPizzas = value => (value > 15 ? 'Are you mad?' : undefined);

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing.unit * 2,
    },
  });

class NewBugForm extends Component {
  constructor(props){
      super(props);
      this.state = {
          components:[],
          editing: false,
          age: ''
      }
      const {chosenProduct} = props;
      this.handleProductChange = this.handleProductChange.bind(this);
  }

  setEditing(editing){
      this.setState({
          editing
      })
  }

  componentDidMount() {
    console.log(this.props);
    this.props.actions.loadProducts();
    this.props.actions.loadUsers();

  }

  handleProductChange(val){
      console.log(val);
      const products = this.props.products;
      console.log(products);
      const result = products.find(product => `${product.id}` === val);
      this.setState({ components : result ? result.components : []});
      console.log(this.state.components);
  }
  
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {handleSubmit, pristine, classes, reset, submitting} = this.props;
    const productsList = this.props.products.map((product, index) =>
        //<MenuItem key={index} value={product.name} primaryText={product.name} />
        <MenuItem key={index} value={product._id} >{product.name} </MenuItem>

    );
    console.log(productsList);
   
    const usersList = this.props.users.map((user, index) =>
        <MenuItem key={index} value={user.id}>{user.email} </MenuItem>
    )
    console.log(usersList);
    //const BugTitle = (this.props.bugId) ? (<h2>Bug ID : {this.props.bugId}</h2>):null;
    
    //Buttons added while form is used to create an issue
    const CreateButtons = <div>
                            <button type="submit" disabled={pristine || submitting}>Add</button>
                            <button
                                type="button"
                                disabled={pristine || submitting}
                                onClick={reset}
                            >
                                Clear
                            </button>
                            </div>;

    //Buttons added while form is used to edit/save an issue
    const EditButtons = this.state.editing ? (
        <div>
            <button type="submit" disabled={submitting}>Save</button>
            <button
                type="button"
                disabled={pristine || submitting}
                onClick={reset}
            >
                Clear
            </button>
        </div>)
        :<button onClick={() => this.setEditing(true)}>Edit</button>;
    console.log(this.props.bug);
    return (
        <div>
            <form onSubmit={this.props.onSubmit} className="issueForm">
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="product">Product</InputLabel>
                <Select
                value={this.props.bug.productId}
                onChange={this.props.selectChange}
                input={<Input name="productId" id="product" />}
                >
                {productsList}
                    
                </Select>
            </FormControl> 
                {/* <FormControl>
                    <InputLabel htmlFor="product">Product</InputLabel>
                    <Select
                        
                        value={this.props.bug.product}
                        onChange={this.props.selectChange}
                        input={<Input name="product" id="product" />}
                        onChange={this.props.onChange('product')}
                        >
                        {productsList}
                    </Select>
                </FormControl> */}
                <br />
                <div>
                <Field
                    name="version"
                    component={TextField}
                    hintText="1.0"
                    floatingLabelText="Enter a version"
                    value={this.props.bug.version}
                    onChange={this.props.onChange('version')}
                />
                </div>
                <div>
                <Field
                    name="component"
                    component={TextField}
                    hintText="Component A"
                    floatingLabelText="Enter Component"
                    value={this.props.bug.component}
                    onChange={this.props.onChange('component')}
                />
                <br/>
                <div>
                <Field
                    name="title"
                    component={TextField}
                    hintText="Bug Title"
                    floatingLabelText="BugTitle"
                    validate={required}
                    value={this.props.bug.title}
                    onChange={this.props.onChange('title')}
                    ref="title"
                    withRef
                />
                </div>
                <div>
                <Field
                    name="description"
                    component={TextField}
                    hintText="Bug Description"
                    floatingLabelText="Bug Description"
                    value={this.props.bug.description}
                    onChange={this.props.onChange('description')}
                    multiLine
                    rows={2}
                />
                </div>
                <br/>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="severity">Severity</InputLabel>
                    <Select
                        value={this.props.bug.severity}
                        onChange={this.props.selectChange}
                        inputProps={{
                        name: 'severity',
                        id: 'severity',
                        }}
                    >
                        <MenuItem value="low" >low </MenuItem>
                        <MenuItem value="medium">medium </MenuItem>
                        <MenuItem value="high" > high </MenuItem>
                    </Select>
                </FormControl>
                <div>
                {/*// <InputLabel htmlFor="severity">Severity</InputLabel>
                // <Select
                //     value={this.props.bug.severity}
                //     onChange={this.props.selectChange}
                //     input={<Input name="severity" id="severity" />}
                //     onChange={this.props.onChange('severity')}
                //     >
                //         <MenuItem value="low" primaryText="low" />
                //         <MenuItem value="medium" primaryText="medium" />
                //         <MenuItem value="high" primaryText="high" />
                    // </Select>*/}
                </div>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="priority">Priority</InputLabel>
                    <Select
                        value={this.props.bug.priority}
                        onChange={this.props.selectChange}
                        inputProps={{
                        name: 'priority',
                        id: 'priority',
                        }}
                    >
                        <MenuItem value="p1" >P1 </MenuItem>
                        <MenuItem value="p2">P2 </MenuItem>
                        <MenuItem value="p3" > P3 </MenuItem>
                    </Select>
                </FormControl>
                {/*<div>
                    <Field
                        name="priority"
                        component={renderSelectField}
                        label="priority"
                        value={this.props.bug.priority}
                        onChange={this.props.onChange('priority')}
                    >
                        <MenuItem value="p1" primaryText="P1" />
                        <MenuItem value="p2" primaryText="P2" />
                        <MenuItem value="p3" primaryText="P3" />
                    </Field>
                </div>*/}
                    <br/>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="status">Status</InputLabel>
                    <Select
                        value={this.props.bug.status}
                        onChange={this.props.selectChange}
                        inputProps={{
                        name: 'status',
                        id: 'status',
                        }}
                    >
                        <MenuItem value="open" >open </MenuItem>
                        <MenuItem value="inProgress">in-progress </MenuItem>
                        <MenuItem value="fixed" > fixed </MenuItem>
                        <MenuItem value="closed" > closed </MenuItem>
                    </Select>
                </FormControl>
                </div>
                {/*<div>
                    <Field
                        name="status"
                        component={renderSelectField}
                        label="status"
                        value={this.props.bug.status}
                        onChange={this.props.onChange('status')}
                    >
                        <MenuItem value="open" primaryText="open" />
                        <MenuItem value="inProgress" primaryText="in-progress" />
                        <MenuItem value="fixed" primaryText="fixed" />
                        <MenuItem value="closed" primaryText="closed" />
                </Field>
                </div>*/}
                <br/>
                <div>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="reporter">reporter</InputLabel>
                    <Select
                        value={this.props.bug.reporter}
                        onChange={this.props.selectChange}
                        inputProps={{
                        name: 'reporter',
                        id: 'reporter',
                        }}
                    >
                        {usersList}
                    </Select>
                </FormControl>
                {/*     <Field
                        name="reporter"
                        component={renderSelectField}
                        label="Select an reporter"
                        type="select"
                        value={this.props.bug.reporter}
                        onChange={this.props.onChange('reporter')}
                        >
                        {usersList}
                    </Field> */}
                </div>
                <br/>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="assignee">assignee</InputLabel>
                    <Select
                        value={this.props.bug.assignee}
                        onChange={this.props.selectChange}
                        inputProps={{
                        name: 'assignee',
                        id: 'assignee',
                        }}
                    >
                        {usersList}
                    </Select>
                </FormControl>
                {/* <Field
                    name="assignee"
                    component={renderSelectField}
                    label="Select an assignee"
                    type="select"
                    value={this.props.bug.assignee}
                    onChange={this.props.onChange('assignee')}
                    >
                    {usersList}
                </Field> */}
                {/* <div>
                <Field
                    name="dueDate"
                    component={DatePicker}
                    format={null}
                    hintText="Due Date"
                    validate={required}
                    value={this.props.bug.description}
                    onChange={this.props.onChange('dueDate')}
                />
                </div> */}
                <div>
                <TextField
                    id="date"
                    label="Birthday"
                    type="date"
                    defaultValue="2017-05-24"
                    className={classes.textField}
                    
                    onChange={this.props.onChange('dueDate')}
              />
                </div>
                            {CreateButtons}
                
            </form>
        </div>
    );
  }
}

const selector = formValueSelector('issueForm');
const mapStateToProps = (state, props) => {
    console.log(state);
     return {
         products:state.productsReducer.products,
         users:state.usersReducer.users,
         error: state.productsReducer.error
     } 
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(Object.assign(
            {}, productActions, userActions), dispatch)
    };
    }

NewBugForm = connect(mapStateToProps,mapDispatchToProps)(NewBugForm);
// NewBugForm = connect(
//     state => {
//         const selectedProduct = selector(state, 'product')
//         return {
//             selectedProduct
//         }
//     })(NewBugForm);

NewBugForm = reduxForm({
  form: 'issueForm',
  initialValues: {
    delivery: 'delivery',
    name: 'Jane Doe',
    cheese: 'Cheddar',
    pizzas: 1,
  },
})(NewBugForm);

export default withStyles(styles)(NewBugForm);