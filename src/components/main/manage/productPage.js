import React, {Component} from 'react';
import {Redirect} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../../../actions/productActions';
import ProductForm from './productForm';

/*Material UI imports */
import Button from '@material-ui/core/Button';

class ProductPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            product:this.props.product,
            editing:false,
            deleting:false
        }
        this.saveProduct = this.saveProduct.bind(this);
        this.handleDeleteProduct = this.handleDeleteProduct.bind(this);
        this.handleEditProduct = this.handleEditProduct.bind(this);
        this.updateProductState = this.updateProductState.bind(this);
    }

    handleEditProduct(){
        this.setState(
            {editing:true}
        )
    }

    updateProductState = (name) => event =>{
        const field = name;
        const product = this.props.product;
        
        product[field] = event.target.value;
        console.log("updating input for product", product)
        this.props.actions.updateProductField(product);  
    }

    saveProduct(event){
        event.preventDefault();
        this.setState(
            {editing:false}
        )
        this.props.actions.updateProduct(this.props.product);  
    }

    handleDeleteProduct(event){
        this.props.actions.deleteProduct(this.props.product);
        this.setState({
            deleting:true
        })
    }
    
    render(){
        console.log(this.props);
        if(this.state.deleting){ 
            return (<Redirect to='/products' />);
        }
        console.log(this.props.products);
        if(this.state.editing){
             return(
                <ProductForm product={this.props.product}
                onSave={this.saveProduct}  
                onChange= {field =>this.updateProductState(field)}/>
             )   
        }
        return(
            <div>
                <p> Name: {this.props.product.name} </p>
                <p> Title: {this.props.product.title} </p>
                <p> Description: {this.props.product.description} </p>
                <Button variant="raised"
                onClick={() => this.handleEditProduct()}>
                Edit
                </Button>
            
                <Button variant="raised"
                    onClick={() => this.handleDeleteProduct()}>
                    Delete
                </Button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(Actions, dispatch)
    };
  }

const mapStateToProps = (state, props) => {
    const productId = parseInt(props.match.params.productId);
    console.log(productId);
    const currentProduct = state.productsReducer.products.filter(product => product.id == productId);
    console.log(currentProduct[0]);
    return {product:currentProduct[0]};  
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
