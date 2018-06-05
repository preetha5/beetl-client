import React from 'react';
import { Field, reduxForm } from 'redux-form';

// Material-UI
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

const LoginForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form style={style} onSubmit={handleSubmit(values => props.onSubmit(values))}>
      <div>
        <Field name="email" component={renderTextField} label="Email" />
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
  form: 'LoginForm', // a unique identifier for this form
  validate,
  asyncValidate,
})(LoginForm);
