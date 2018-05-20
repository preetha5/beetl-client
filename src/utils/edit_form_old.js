import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field,select, reduxForm, formValueSelector} from 'redux-form';
import {RadioButton} from 'material-ui/RadioButton';
import MenuItem from 'material-ui/MenuItem';
import {AutoComplete as MUIAutoComplete} from 'material-ui';
import { load as loadAccount } from '../reducers/account';
import {
  AutoComplete,
  Checkbox,
  DatePicker,
  TimePicker,
  RadioButtonGroup,
  //SelectField,
  Slider,
  TextField,
  Toggle,
  DropDownMenu
} from 'redux-form-material-ui';
import SelectField from 'material-ui/SelectField';
//import {renderSelectField} from './material-ui-form.js';

// validation functions
const required = value => (value == null ? 'Required' : undefined);
const email = value =>
  (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined);

const renderSelectField = (
    { input, label, meta: { touched, error }, children, ...custom },
  ) => (
    <SelectField
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      onChange={(event, index, value) => input.onChange(value)}
      children={children}
      {...custom}
    />
  );
  const data = {
    product:"Scanner",
    component:'Mirror',
    version:'1.0',
    severity:'P1',
    reporter:"Jane dev",
    title:"scanner head broken",
    description:"bad scanner"
}

class EditForm extends Component {
  constructor(props){
      super(props);
      this.state = {
          components:[],
          editing: false
      }
      const {chosenProduct} = props;
      this.handleProductChange = this.handleProductChange.bind(this);
      const data = {}
  }

  setEditing(editing){
      this.setState({
          editing
      })
  }

  handleProductChange(val){
      console.log(val);
      const products = this.props.products;
      console.log(products);
      const result = products.find(product => `${product.id}` === val);
      this.setState({ components : result ? result.components : []});
      console.log(this.state.components);
  }

  handleEditClick(editing){
    this.setState({
        editing
    })
  }
  render() {
    const {handleSubmit, load, pristine, reset, submitting} = this.props;
    const productsList = this.props.products.map((product, index) =>
        <MenuItem key={index} value={product.productName.toString().toLowerCase()} primaryText={product.productName}/>
    )
    const componentList = this.state.components.map((item, index) => 
        <MenuItem key={index} value={item.toString().toLowerCase()} primaryText={item}/>
    );
    const usersList = this.props.users.map((user, index) =>
        <MenuItem key={index} value={user} primaryText={user}/>
    )
    console.log(componentList);
    
    //Buttons added while form is used to edit/save an issue
    const EditButtons = this.state.editing ? (
        <div>
            <button type="submit" disabled={submitting}>Save</button>
            <button
                type="button"
                onClick={() => this.handleEditClick(false)}
            >
                Cancel
            </button>
        </div>)
        :<button onClick={() => this.handleEditClick(true)}>Edit</button>;

    return (
        <div>
            <form onSubmit={handleSubmit} className="issueForm">
                <h2>Bug ID : {this.props.bugId}</h2>
                <div>
                    <button type="button" onClick={() => { load(data); console.log(data); }} >Load Account</button>
                </div>
                <div>
                <Field
                    name="product"
                    component={renderSelectField}
                    label="Choose a product"
                    onChange={(e, val)=>{this.handleProductChange(val)}}
                    ref="product"
                    withRef
                    >
                    {productsList}
                </Field>
                </div>
                <div>
                <Field
                    name="version"
                    component={TextField}
                    hintText="1.0"
                    floatingLabelText="Enter a version"
                />
                </div>
                <div>
                <Field
                    name="component"
                    component={renderSelectField}
                    label="Choose a component"
                    type="select"
                    >
                    {componentList}
                </Field>
                <div>
                    <Field
                        name="severity"
                        component={renderSelectField}
                        label="severity"
                    >
                        <MenuItem value="low" primaryText="low" />
                        <MenuItem value="medium" primaryText="medium" />
                        <MenuItem value="high" primaryText="high" />
                    </Field>
                </div>
                <div>
                    <Field
                        name="priority"
                        component={renderSelectField}
                        label="priority"
                    >
                        <MenuItem value="p1" primaryText="P1" />
                        <MenuItem value="p2" primaryText="P2" />
                        <MenuItem value="p3" primaryText="P3" />
                    </Field>
                </div>
                </div>
                <div>
                <Field
                    name="reporter"
                    component={TextField}
                    hintText="Reporter"
                    floatingLabelText="Reporter"
                    ref="reporter"
                    withRef
                />
                </div>
                <div>
                <Field
                    name="title"
                    component={TextField}
                    hintText="Issue Title"
                    floatingLabelText="IssueTitle"
                    validate={required}
                    ref="title"
                    withRef
                />
                </div>
                <div>
                <Field
                    name="description"
                    component={TextField}
                    hintText="Issue Description"
                    floatingLabelText="Issue Description"
                    multiLine
                    rows={2}
                />
                </div>
                <Field
                    name="users"
                    component={renderSelectField}
                    label="Select an assignee"
                    type="select"
                    >
                    {usersList}
                </Field>
                <div>
                <Field
                    name="Due Date"
                    component={DatePicker}
                    format={null}
                    hintText="Due Date"
                    validate={required}
                />
                </div>
                {EditButtons}
            </form>
            
        </div>
    );
  }
}

const selector = formValueSelector('editForm');
console.log(this.state);
EditForm = connect(
    state => (
        {
        initialValues: state.account.data
    }),
    {load: loadAccount},
    )(EditForm);

EditForm = reduxForm({
  form: 'editForm',
})(EditForm);

export default EditForm;