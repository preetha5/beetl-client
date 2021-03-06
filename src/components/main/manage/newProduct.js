import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import {bindActionCreators} from 'redux';
import * as Actions from '../../../actions/productActions';
import NewProductForm from './newProductForm';

//Material UI imports
import Grid from '@material-ui/core/Grid';

class NewProduct extends React.Component{
    constructor(props){
        super(props);
        //temp code until backend is ready
        let temp = Math.floor(Math.random()*2000);
        this.state = {
            product:{id:temp,name:"",title:"", description:""},
            adding:false
        }
        this.createProduct = this.createProduct.bind(this);
        this.updateProductState = this.updateProductState.bind(this);
    }

    createProduct(event){
        event.preventDefault();
        console.log(this.state.product);
        this.props.actions.createProduct(this.state.product);
        this.setState(
            {adding:true}
        );
    }

    updateProductState = (name) => event =>{
        const field = name;
        const product = this.state.product;
        product[field] = event.target.value;
        console.log(product);
        return this.setState({product: product});
      }

    render(){
        if(this.state.adding){
            return( <Redirect to="/products" />);
         }
        return(
            <Grid container justify='center'>
                <Grid item xs={12} style={{textAlign: 'center'}}>
                <h3>Add Product</h3>
                <NewProductForm product={this.state.product}
                onSubmit={this.createProduct} 
                onChange= {field =>this.updateProductState(field) }/>
            </Grid>
            </Grid>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(Actions, dispatch)
    };
  }

  export default connect(null, mapDispatchToProps)(NewProduct);