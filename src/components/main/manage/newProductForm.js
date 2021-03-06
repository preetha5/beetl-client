import React,{Component} from 'react';
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
    btnStyle : {
        marginRight: '1em',
        marginTop: '2em',
        background: 'lightgrey'
      },
  });

class NewProductForm extends Component{

    render(){
        const { classes, pristine, invalid, submitting } = this.props;

        return(
            <div>
            <form className="productForm" onSubmit={this.props.onSubmit}>
                <div>
                    <TextField
                    id="name"
                    label="Product Name"
                    //className={classes.textField}
                    value={this.props.product.name}
                    onChange={this.props.onChange('name')}
                    margin="normal"
                    required
                    />
                </div>
                <div>
                    <TextField
                    id="title"
                    label="Title"
                    className={classes.textField}
                    value={this.props.product.title}
                    onChange={this.props.onChange('title')}
                    margin="normal"
                    required
                />
                </div>
                <div>
                    <TextField
                    id="description"
                    label="Description"
                    rowsMax="4"
                    className={classes.textField}
                    value={this.props.product.description}
                    onChange={this.props.onChange('description')}
                    margin="normal"
                    />
                </div>
                <div>
                    <Button variant="raised"
                    className={classes.btnStyle}
                    type="submit"
                    disabled={invalid|| submitting || pristine}>Add</Button>
                </div>
            </form>
            </div>
        )
    }
}

NewProductForm.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  
export default withStyles(styles)(NewProductForm);
