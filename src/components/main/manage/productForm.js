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

class ProductForm extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const { classes,invalid, handleSubmit, load, pristine, reset, submitting } = this.props;

        return(
            <div>
            <form className="productForm" onSubmit={this.props.onSave}>
                
                <TextField
                id="name"
                label="Product Name"
                //className={classes.textField}
                value={this.props.product.name}
                onChange={this.props.onChange('name')}
                margin="normal"
                required
                />
                <TextField
                id="title"
                label="Title"
                className={classes.textField}
                value={this.props.product.title}
                onChange={this.props.onChange('title')}
                margin="normal"
                required
                />
                <TextField
                id="description"
                label="Description"
                rowsMax="4"
                className={classes.textField}
                value={this.props.product.description}
                onChange={this.props.onChange('description')}
                margin="normal"
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

ProductForm.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  
export default withStyles(styles)(ProductForm);
