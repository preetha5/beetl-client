import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Switch, Route, Link} from 'react-router-dom';
import ProductPage from './productPage';
import NewProduct from './newProduct';
import {bindActionCreators} from 'redux';
import * as productActions from '../../../actions/productActions';
//import {loadProducts} from '../../../actions/productActions';

//Material UI imports
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import {List, ListItem} from 'material-ui/List';
import { yellow100 } from 'material-ui/styles/colors';

const style = {
    width: 100,
    marginTop: 20,
    marginRight: 20,
    marginBottom: 20,
    display: 'inline-block',
    backgroundColor:yellow100
  };

class ManageProducts extends Component{
    
    componentWillMount(){
        console.log(this.props);
        this.props.actions.loadProducts();
    }

    render(){
        const errorMsg = this.props.error ? 
        `<div>${this.props.error}</div>`:null
        
        console.log(this.props.products);
        return(
            <Grid container>
                <h1> Manage Products </h1>
                <Grid item xs={12}>
                    <Button variant="fab" color="primary" 
                    aria-label="add products"> <Link to={`/products/new`} ><AddIcon /></Link></Button>
                </Grid>
                <Grid item xs={12} sm={3} >
                    <Paper style={style} zdepth={3}>
                    <List>
                    { this.props.products && this.props.products.map(({name, _id}) => 
                        <ListItem key={_id} primaryText={ <Link to={`/products/${_id}`}> {name} </Link> }/>       
                    )}
                    </List>
                </Paper>
                </Grid>
                <Grid item xs={12} sm={9}>
                    <Switch>
                        <Route  path={`/products/new`} component={NewProduct} />
                        <Route path={`/products/:productId`} component={ProductPage} />
                    </Switch>
                </Grid>
                <Grid item xs={12} sm={9}>
                    {errorMsg}
                </Grid>
            </Grid> 

        )
    }
}

const mapStateToProps = (state, props) => {
    console.log(state);
     return {
         products:state.productsReducer.products,
         error: state.productsReducer.error
     } 
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(productActions, dispatch)
    };
    }

export default connect(mapStateToProps, mapDispatchToProps)(ManageProducts);