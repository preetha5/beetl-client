import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { load as loadAccount } from '../../reducers/account';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import DatePicker from 'material-ui/DatePicker';
import Button from '@material-ui/core/Button';
import {
    //DatePicker,
    TimePicker,
    //SelectField,
    Slider,
    TextField,
  } from 'redux-form-material-ui';

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
  // used to populate "account" reducer when "Load" is clicked
  product:"Scanner",
  component:"Mirror",
  version:'1.0',
  severity:'low',
  priority:'p1',
  reporter:"Jane dev",
  title:"scanner head broken",
  description:"bad scanner",
  assignee:"Joe Dev",
  dueDate:"2016-05-28T00:00:00.000Z",
  status:"in-progress",
  favoriteColor: 'Blue',
};


const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];


class EditForm extends React.Component {
    constructor(props){
        super(props);
        const dueDate = new Date(2018, 11, 24, 10, 33, 30);

        const minDate = new Date();
    const maxDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 1);
    minDate.setHours(0, 0, 0, 0);
    maxDate.setFullYear(maxDate.getFullYear() + 1);
    maxDate.setHours(0, 0, 0, 0);

        this.state = {
            components:['Mirror','Glass Plate','Filter','Scan Head', 'CCD Array'],
            editing: false,
            dueDate : dueDate,
            minDate: minDate,
            maxDate: maxDate,
            autoOk: false
        }
        //const {chosenProduct} = props;
        this.handleProductChange = this.handleProductChange.bind(this);
        const data = {}
        
    }

    componentWillMount() {
        this.props.load(data);
    }

    deleteIssue(event) {
       // this.props.actions.deleteIssue(this.state.issue)
      }
    
    handleChangeMinDate = (event, date) => {
        this.setState({
          minDate: date,
        });
      };
    
      handleChangeMaxDate = (event, date) => {
        this.setState({
          maxDate: date,
        });
      };

    setEditing(editing){
        this.setState({
            editing
        })
    }
  
    handleProductChange(val){

        const products = this.props.products;

        const result = products.find(product => `${product.id}` === val.toLowerCase());
        let comps = result.components;

        this.setState ({
             components : [...comps]
            });
        console.log(this.state.components);
    }

    handleChangeDate = (event, date) => {
        this.setState({
          dueDate: date,
        });
      };

    handleEditClick(editing){
        this.setState({
            editing
        })
      }
    
    formatDate(date){
        
    return date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
    }

    render() {

        const { handleSubmit, load, pristine, reset, submitting } = this.props;
        const componentList = this.state.components.map((item, index) => 
            <MenuItem key={index} value={item.toString().toLowerCase()} primaryText={item}/>
        );
        const usersList = this.props.users.map((user, index) =>
            <MenuItem key={index} value={user} primaryText={user}/>
        );
        console.log(this.state.dueDate);
        //Buttons added while form is used to edit/save an issue
        const EditButtons = this.state.editing ? (
            <div>
                <Button variant="raised"
                type="submit" disabled={submitting}>Save</Button>
                
                <Button variant="raised"
                    onClick={() => this.handleEditClick(false)}
                >
                    Cancel
                </Button>
            </div>)
            :<Button variant="raised" onClick={() => this.handleEditClick(true)}>Edit</Button>;

        return (
            <form onSubmit={handleSubmit} className="issueForm">
                <h2>Bug ID : {this.props.bugId}</h2>
                
            <div>
                <Field name="product" component="select"
                onChange={(e, val)=>{this.handleProductChange(val)}}
                >
                <option value="">Select a product...</option>
                {this.props.products.map(product => (
                    <option value={product.productName} key={product.productName}>
                    {product.productName}
                    </option>
                ))}
                </Field>
            </div>
            
            <div>
            <Field name="component" component="select">
            <option value="">Select a Component...</option>
            {this.state.components.map(colorOption => (
            <option value={colorOption} key={colorOption}>
                {colorOption}
            </option>
            ))}
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
                    name="status"
                    component={renderSelectField}
                    label="status"
                >
                    <MenuItem value="open" primaryText="Open" />
                    <MenuItem value="in-progress" primaryText="In Progress" />
                    <MenuItem value="fixed" primaryText="Fixed" />
                    <MenuItem value="closed" primaryText="Closed" />
                </Field>
            </div>
        <div>
            <Field 
                name="severity" 
                component={renderSelectField} label="severity">
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
                name="assignee"
                component={renderSelectField}
                label="Select an assignee"
                type="select"
                >
                {usersList}
            </Field>
            <div>
            <DatePicker
                onChange={this.handleChangeDate}
                autoOk={this.state.autoOk}
                floatingLabelText="Due Date"
                defaultDate={this.state.dueDate}
            />
            </div>
            
            {EditButtons}
            <Button variant="raised" onClick={this.deleteIssue} className="btn btn-default  ">delete</Button>
            </form>
        );
        }
    }
  
  // Decorate with reduxForm(). It will read the initialValues prop provided by connect()
  EditForm = reduxForm({
    form: "EditForm", // a unique identifier for this form
    enableReinitialize : true
  })(EditForm);
  
  // You have to connect() to any reducers that you wish to connect to yourself
  EditForm = connect(
    state => ({
      initialValues: state.account.data // pull initial values from account reducer
    }),
    { load: loadAccount } // bind account loading action creator
  )(EditForm);
  
  export default EditForm;
