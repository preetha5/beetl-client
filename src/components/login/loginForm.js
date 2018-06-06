import React from 'react';
import { Field, reduxForm } from 'redux-form';

// Material-UI
import TextField from 'material-ui/TextField';
import asyncValidate from '../../utils/asyncValidate';
import validate from '../../utils/validate';

/*Material UI */
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const fieldStyle = {
    width:'100%'
};

const fmStyle ={
    width: 350,
    textAlign: 'center'
}

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

const LoginForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form style={fmStyle} onSubmit={handleSubmit(values => props.onSubmit(values))}>
      <Grid item xs={12} >
        <Field style={fieldStyle} name="email" component={renderTextField} label="Email" />
      </Grid>
    <Grid item xs={12}>
        <Field style={fieldStyle} name="password" type="password" component={renderTextField} label="Password" />
      </Grid>
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
