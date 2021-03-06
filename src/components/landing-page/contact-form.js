import React from 'react';
import { Field, reduxForm } from 'redux-form';

// Material UI
 import TextField from 'material-ui/TextField';

import SelectField from 'material-ui/SelectField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import asyncValidate from '../../utils/asyncValidate';
import validate from '../../utils/validate';

const style = {
    display: 'flex',
    flexWrap: 'wrap',
};

const btnstyle = {
  marginRight: '1em',
  marginTop: '2em',
};

const renderTextField = (
    { input, label, meta: { touched, error }, ...custom },
  ) => (
    <TextField
      hintText={label}
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      {...custom}
    />
  );
  
  export const renderSelectField = (
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

//export default function ContactForm(){
export class ContactForm extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            postSuccess:false
        }
        this.onSubmit = this.onSubmit.bind(this);

    }
    onSubmit(values){
        console.log('posting...');
        return this.setState({postSuccess: true});
    }

  render(){
    const { handleSubmit, pristine, reset, submitting } = this.props;
    let successMessage;
    if(this.state.postSuccess){
        successMessage = (
            <div className="message message-success">
                Message submitted successfully
            </div>
        );
    }
    return (
      <section>
        <form style={style} onSubmit={handleSubmit(values => this.onSubmit(values))}>
            <Grid item xs={12} sm={6}>
              <Field 
              name="firstName" 
              component={renderTextField} 
              label="First Name" 
              margin='dense'
              inputStyle={{ color: '#216afa' }}
              />
          </Grid>

          <Grid item xs={12} sm={6}>
              <Field 
              name="lastName" 
              component={renderTextField} 
              label="Last Name" 
              margin='dense'
              inputStyle={{ color: '#216afa' }}
              />
          </Grid>
          
          <Grid item xs={12} sm={6}>
              <Field 
              name="email" 
              component={renderTextField} 
              label="Email" 
              margin='dense'
              inputStyle={{ color: '#216afa' }}
              />
          </Grid>
          
          <Grid item xs={12} sm={6}>
              <Field 
              name="company" 
              component={renderTextField} 
              label="Company"
              margin='dense'
              inputStyle={{ color: '#216afa' }}
              />
          </Grid>
          
          <Grid item xs={12} sm={6}>
              <Field
              name="message"
              component={renderTextField}
              label="Message"
              rows={1}
              margin='dense'
              inputStyle={{ color: '#216afa' }}
              />
          </Grid>
          
          <Grid item xs={12} sm={6}>
              <Button variant="raised" color="primary" style={btnstyle} type="submit" disabled={pristine || submitting}>Submit</Button>
              <Button variant="raised" style={btnstyle} type="button" disabled={pristine || submitting} onClick={reset}>
                Clear Values
              </Button>
          </Grid>
          <Grid item xs={12} style={{color:'green'}}>
            {successMessage}
          </Grid>
        </form>
      </section>
  )
}
}

export default reduxForm({
    form: 'ContactForm', // a unique identifier for this form
    validate,
    asyncValidate,
  })(ContactForm);


