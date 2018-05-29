import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import asyncValidate from '../../utils/asyncValidate';
import validate from '../../utils/validate';

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
            <div>
                <Field name="firstName" component={renderTextField} label="First Name" />
            </div>
            <div>
                <Field name="lastName" component={renderTextField} label="Last Name" />
            </div>
            <div>
                <Field name="email" component={renderTextField} label="Email" />
            </div>
            <div>
                <Field name="company" component={renderTextField} label="Company" />
            </div>
            <div>
                <Field
                name="message"
                component={renderTextField}
                label="Message"
                multiLine={true}
                rows={2}
                />
            </div>
            <div>
                <button type="submit" disabled={pristine || submitting}>Submit</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                Clear Values</button>
            </div>
        </form>
        </section>
    )
}

export default reduxForm({
    form: 'ContactForm', // a unique identifier for this form
    validate,
    asyncValidate,
  })(ContactForm);