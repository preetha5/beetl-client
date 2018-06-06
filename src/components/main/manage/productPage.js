import React, {Component} from 'react';
import {Redirect} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../../../actions/productActions';
import ProductForm from './productForm';

/*Material UI imports */
import Button from '@material-ui/core/Button';
//Material UI imports
import Grid from '@material-ui/core/Grid';

class ProductPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            product:this.props.product,
            editing:false,
            redirect:false
        }
        this.saveProduct = this.saveProduct.bind(this);
        this.handleDeleteProduct = this.handleDeleteProduct.bind(this);
        this.handleEditProduct = this.handleEditProduct.bind(this);
        this.updateProductState = this.updateProductState.bind(this);
    }

    componentDidMount(){
        
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
        console.log("updating...", this.props.product);
        this.props.actions.updateProduct(
            this.props.productId, this.props.product);
        this.setState(
            {redirect:true}
        )
    }

    handleDeleteProduct(){
        this.props.actions.deleteProduct(this.props.productId);
        this.setState({
            redirect:true
        })
    }
    
    render(){
        console.log(this.props);
        if(this.state.redirect){ 
            return (<Redirect to='/products' />);
        }

        if(this.state.editing){
             return(
                <ProductForm product={this.props.product}
                onSubmit={this.saveProduct}  
                onChange= {field =>this.updateProductState(field)}/>
             )   
        }
        return(
            <Grid container justify='center'>
                <Grid item style={{textAlign: 'center'}}>
                    <p> Name: {this.props.product && this.props.product.name} </p>
                    <p> Title: {this.props.product && this.props.product.title} </p>
                    <p> Description: {this.props.product && this.props.product.description} </p>
                    <Button variant="raised"
                    onClick={() => this.handleEditProduct()}>
                    Edit
                    </Button>
            
                <Button variant="raised"
                    onClick={() => this.handleDeleteProduct()}>
                    Delete
                </Button>
            </Grid>
        </Grid>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(Actions, dispatch)
    };
  }

const mapStateToProps = (state, props) => {
    const productId = props.match.params.productId;
    const products = state.productsReducer.products;
    console.log(products)
    const currentProduct = state.productsReducer.products.find(product =>
        product._id === productId);
    console.log(currentProduct);
    return {product:currentProduct , productId};  
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
