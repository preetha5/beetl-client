import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field,select, reduxForm, formValueSelector} from 'redux-form';
import {bindActionCreators} from 'redux';
import * as productActions from '../../../actions/productActions';
import * as userActions from '../../../actions/userActions';
import FloatingLabel from 'floating-label-react'

/* Material UI */
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {RadioButton} from 'material-ui/RadioButton';
import MenuItem from 'material-ui/MenuItem';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import {AutoComplete as MUIAutoComplete, ActionSettingsApplications} from 'material-ui';
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
      backgroundColor:'white',
      textAlign: 'center',
      marginBottom: 150
    },
    formControl: {
      marginBottom: 16,
      minWidth: 120,
      fontSize: 16,
      lineHeight: 24,
      width: 256
    },
    selectEmpty: {
      marginTop: theme.spacing.unit * 2,
    },
    btnStyle : {
        marginRight: '1em'
      },
    btnDiv : {
        marginTop: '1em',
        [theme.breakpoints.up('xs')]: {
            marginTop: '4em',
          },
        marginBottom: 20,
        textAlign: 'center'
    },
    dateField:{
        paddingLeft: 100,
        color: 'black'
    }
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
    //Buttons added while form is used to create an issue
    const CreateButtons = <Grid item xs={12} className={classes.btnDiv}>
                            <Button 
                                variant="raised" 
                                color="primary" 
                                className={classes.btnStyle} 
                                type="submit" 
                                disabled={pristine || submitting}>Add</Button>
                            <Button
                                variant="raised"
                                className={classes.btnStyle}
                                type="button"
                                disabled={pristine || submitting}
                                onClick={reset}
                            >
                                Clear
                            </Button>
                            </Grid>;

    //Buttons added while form is used to edit/save an issue
    const EditButtons = this.state.editing ? (
        <Grid item xs={12} textAlign = 'center' className={classes.btnDiv}>
            <Button variant="raised" 
            color="primary" 
            type="submit" 
            disabled={pristine || submitting}
            >Save
            </Button>
            <Button variant="raised"
                type="button"
                disabled={pristine || submitting}
                onClick={reset}
            >
                Clear
            </Button>
        </Grid>)
        :<Button variant="raised" color="primary" onClick={() => this.setEditing(true)}>Edit</Button>;
    console.log(this.props.bug);
    return (
        <section>
            <form id="newBugForm" onSubmit={this.props.onSubmit} className={classes.root}>
            <Grid item xs={12} sm={6}>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="product">Select a Product</InputLabel>
                    <Select
                    value={this.props.bug.productId}
                    onChange={this.props.selectChange}
                    input={<Input name="productId" id="product" />}
                    >
                    {productsList}    
                    </Select>
                </FormControl> 
            </Grid>
                
            <Grid item xs={12} sm={6}>
                <Field
                    name="version"
                    component={TextField}
                    hintText="1.0"
                    floatingLabelText="Enter a version"
                    value={this.props.bug.version}
                    onChange={this.props.onChange('version')}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Field
                    name="component"
                    component={TextField}
                    hintText="Enter Component"
                    floatingLabelText="Component"
                    value={this.props.bug.component}
                    onChange={this.props.onChange('component')}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
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
            </Grid>
            <Grid item xs={12} sm={6}>
                <Field
                    name="description"
                    component={TextField}
                    hintText="Bug Description"
                    floatingLabelText="Bug Description"
                    value={this.props.bug.description}
                    onChange={this.props.onChange('description')}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
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
            </Grid>
            <Grid item xs={12} sm={6}>
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
                    </Grid>
            <Grid item xs={12} sm={6}>
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
            </Grid>
                
            <Grid item xs={12} sm={6}>
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
                </Grid>

            <Grid item xs={12} sm={6}>
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
            </Grid>
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
    
            <Grid item xs={12} sm={6}>
                <TextField
                    id="date"
                    label="Due Date"
                    type="date"
                    inputStyle={{ paddingLeft: 100 }}
                    className={classes.textField}
                    hintText="Due Date"
                    onChange={this.props.onChange('dueDate')}
            />
            </Grid>
                        {CreateButtons}
                
            </form>
        </section>
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
})(NewBugForm);

export default withStyles(styles)(NewBugForm);