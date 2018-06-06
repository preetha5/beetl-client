import React,{Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

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
            <Grid container justify="center">
            <form className="productForm" onSubmit={this.props.onSubmit}>
                <Grid item>
                    <TextField
                    id="name"
                    label="Product Name"
                    //className={classes.textField}
                    value={this.props.product.name}
                    onChange={this.props.onChange('name')}
                    margin="normal"
                    required
                    />
                </Grid>
                <Grid item>
                    <TextField
                    id="title"
                    label="Title"
                    className={classes.textField}
                    value={this.props.product.title}
                    onChange={this.props.onChange('title')}
                    margin="normal"
                    required
                />
                </Grid>
                <Grid item>
                    <TextField
                    id="description"
                    label="Description"
                    rowsMax="4"
                    className={classes.textField}
                    value={this.props.product.description}
                    onChange={this.props.onChange('description')}
                    margin="normal"
                    />
                </Grid>
                <Grid item>
                    <Button variant="raised"
                    type="submit" disabled={submitting || pristine}>Save</Button>
                </Grid>
            </form>
            </Grid>
        )
    }
}

ProductForm.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  
export default withStyles(styles)(ProductForm);
