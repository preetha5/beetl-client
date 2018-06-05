import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import asyncValidate from '../../utils/asyncValidate';
import validate from '../../utils/validate';

import Button from '@material-ui/core/Button';
import deepPurple from '@material-ui/core/colors/deepPurple';

const style = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
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

const renderCheckbox = ({ input, label }) => (
  <Checkbox
    label={label}
    checked={input.value ? true : false}
    onCheck={input.onChange}
  />
);

const renderRadioGroup = ({ input, ...rest }) => (
  <RadioButtonGroup
    {...input}
    {...rest}
    valueSelected={input.value}
    onChange={(event, value) => input.onChange(value)}
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

const SignUpForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form style={style} onSubmit={handleSubmit(values => props.onSubmit(values))}>
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
