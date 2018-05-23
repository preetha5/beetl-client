import React,{Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    menu: {
      width: 200,
    },
  });

class UserForm extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const { classes,invalid, handleSubmit, load, pristine, reset, submitting } = this.props;

        return(
            <div>
            <form className="userForm" onSubmit={this.props.onSave}>
                
                <TextField
                id="firstName"
                label="First Name"
                //className={classes.textField}
                value={this.props.user.firstName}
                onChange={this.props.onChange('firstName')}
                margin="normal"
                required
                />
                <TextField
                id="lastName"
                label="Last Name"
                className={classes.textField}
                value={this.props.user.lastName}
                onChange={this.props.onChange('lastName')}
                margin="normal"
                required
                />
                <TextField
                id="email"
                label="Email"
                placeholder="bill@microsoft.com"
                className={classes.textField}
                value={this.props.user.email}
                onChange={this.props.onChange('email')}
                margin="normal"
                required
                />
                <TextField
                id="role"
                label="role"
                placeholder="developer (or) tester"
                className={classes.textField}
                value={this.props.user.role}
                onChange={this.props.onChange('role')}
                margin="normal"
                required
                />
                <div>
                    <Button variant="raised"
                    type="submit" disabled={invalid|| submitting || pristine}>Save</Button>
                </div>
            </form>
            </div>
        )
    }
}

UserForm.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  
export default withStyles(styles)(UserForm);
