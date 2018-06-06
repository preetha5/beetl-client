import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import asyncValidate from '../../utils/asyncValidate';
import validate from '../../utils/validate';
import Button from '@material-ui/core/Button';


const btnstyle = {
  marginRight: '1em',
  marginTop: '2em',
  width: 140
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


const SignUpForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit(values => props.onSubmit(values))}>
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
        <Field name="username" component={renderTextField} label="UserName" />
      </div>
      <div>
        <Field name="password" type="password" component={renderTextField} label="Password" />
      </div>
      <div>
        <Button variant="raised" color="primary" style={btnstyle} type="submit" disabled={pristine || submitting}>Submit</Button>
        <Button variant="raised" style={btnstyle} type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </Button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'SignUpForm', // a unique identifier for this form
  validate,
  asyncValidate,
})(SignUpForm);
