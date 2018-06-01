import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import asyncValidate from '../../utils/asyncValidate';
import validate from '../../utils/validate';

import Grid from '@material-ui/core/Grid';

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
const ContactForm = props => {
        const { handleSubmit, pristine, reset, submitting } = props;
    return(
        <section>
            <form className='contactForm' onSubmit={handleSubmit(values => props.onSubmit(values))}>
            <Grid item>
                <Field name="firstName" component={renderTextField} label="First Name" />
            </Grid>
            <Grid item>
                <Field name="lastName" component={renderTextField} label="Last Name" />
            </Grid>
            <Grid item>
                <Field name="email" component={renderTextField} label="Email" />
            </Grid>
            <Grid item>
                <Field name="company" component={renderTextField} label="Company" />
            </Grid>
            <Grid item>
                <Field
                name="message"
                component={renderTextField}
                label="Message"
                multiLine={true}
                rows={2}
                />
            </Grid>
            <Grid item>
                <button type="submit" disabled={pristine || submitting}>Submit</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                Clear Values</button>
            </Grid>
        </form>
        </section>
    )
}

export default reduxForm({
    form: 'ContactForm', // a unique identifier for this form
    validate,
    asyncValidate,
  })(ContactForm);