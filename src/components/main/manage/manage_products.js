import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Switch, Route, Link, Redirect} from 'react-router-dom';
import ProductPage from './productPage';
import NewProduct from './newProduct';
import {bindActionCreators} from 'redux';
import * as productActions from '../../../actions/productActions';
//import {loadProducts} from '../../../actions/productActions';

//Material UI imports
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import {List, ListItem} from 'material-ui/List';
import blueGrey from '@material-ui/core/colors/blueGrey';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
    style: {
        width: '100%',
        display: 'inline-block',
        backgroundColor: 'lightgrey',
        textAlign: 'center',
        fontFamily: 'Libre Franklin, sans-serif',
        fontWeight: 500,
    },
  rightIcon : {
    marginLeft:8,
  },
 addBtn : {
    fontSize: 10,
    color: "white",
},
 headline : {
    fontFamily: 'Libre Franklin, sans-serif',
    fontWeight: 500,
    letterSpacing: '0',
    color: blueGrey[300],
    paddingBottom: '5px',
    marginTop: '20px',
    marginBottom: '2rem',
    textAlign: 'center'
  },
  contentGrid : {
    backgroundColor:'#eee',
    color:blueGrey[300],
    paddingTop:20,
    paddingBottom:'2rem',
    marginBottom: '9rem',
    [theme.breakpoints.up('sm')]: {
        marginBottom: '0',
      },
    },
    btnStyle: {
        width:190,
        marginBottom:20,
        backgroundColor: "primary",
        '&:hover': {
        backgroundColor: '#f50057',
        color:'white'
    }
}
})

class ManageProducts extends Component{
    
    componentWillMount(){
        console.log(this.props);
        this.props.actions.loadProducts();
    }

    render(){
        const { classes } = this.props;
        const errorMsg = this.props.error ? 
        `${this.props.error}`:null
        
        console.log(this.props.products);
        return(
            <Grid container>
                <Grid item xs={12}>
                    <h1 className={classes.headline}> Manage Products </h1>
                </Grid>
                <Grid item xs={12} sm={3} className={classes.style}>
                    
                    <List>
                        <ListItem>
                        <Button  color="primary" 
                        aria-label="add products"> <Link to={`/products/new`} > + Add a product</Link></Button>
                        </ListItem>
                        <Divider />
                        { this.props.products && this.props.products.map(({name, _id}) => 
                            <ListItem key={_id} primaryText={ <Link to={`/products/${_id}`}> {name} </Link> }/>       
                        )}
                    </List>
                
                </Grid>
                
                <Grid item xs={12} sm={9} className={classes.contentGrid}>
                    <Switch>
                        <Redirect exact from={`/products`} to={`/products/new`} />
                        <Route  path={`/products/new`} component={NewProduct} />
                        <Route path={`/products/:productId`} component={ProductPage} />
                    </Switch>
                </Grid>
                <Grid item xs={12} sm={9} className={classes.errorMsg}>
                    {errorMsg}
                </Grid>
                <Grid item xs={12} style={{textAlign: 'center',marginTop:20}}>
                    <Button
                    variant="outlined" 
                    component={Link}
                    to="/dashboard"
                    color="secondary" 
                    className={classes.btnStyle}>
                    Back to Dashboard</Button>
                    <Button
                    variant="outlined" 
                    component={Link}
                    to="/users"
                    color="secondary" 
                    className={classes.btnStyle}>
                    Manage Users</Button>
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

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ManageProducts));