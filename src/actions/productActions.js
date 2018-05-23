import React from 'react';
import {Redirect} from 'react-router';

export const LOAD_PRODUCTS_SUCCESS = 'LOAD_PRODUCTS_SUCCESS';
export const loadProductsSuccess = products => ({
    type: LOAD_PRODUCTS_SUCCESS,
    products
});

export const CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS';
export const createProductSuccess = product => ({
    type: CREATE_PRODUCT_SUCCESS,
    product
});

export const UPDATE_PRODUCT_FIELD_SUCCESS = 'UPDATE_PRODUCT_FIELD_SUCCESS';
export const updateProductFieldSuccess = product => ({
    type:UPDATE_PRODUCT_FIELD_SUCCESS,
    product
});

export const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS';
export const updateProductSuccess = product => ({
    type: UPDATE_PRODUCT_SUCCESS,
    product
});

export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
export const deleteProductSuccess = product => ({
    type: DELETE_PRODUCT_SUCCESS,
    product
});

const prodArr= [{
    id:0,
    name:'printer',
    title:"Printing Machine",
    description:"A machine that prints digital content on paper"
    },{
    id:1,
    name:'scanner',
    title:"Scanner Machine",
    description:"A machine that scans paper and produces digital copy"
    }
];

const NewProduct = {
    id:3,
    name:'copier',
    title:"Copy Machine",
    description:"A machine that makes a paper copy"
}

export const loadProducts = () => dispatch => {
    console.log("dispatching load products..");
    dispatch(loadProductsSuccess(prodArr));
    return;
};

export const createProduct = (NewProduct) => dispatch => {
    console.log("dispatching create prod..", NewProduct);
    dispatch(createProductSuccess(NewProduct));
    return ;
}

export const updateProductField = (product) => dispatch =>{
    console.log("dispatching update product fields..", product);
    dispatch(updateProductFieldSuccess(product));
    return;
}

export const updateProduct = (product) => dispatch => {
    console.log("saving changes to DB and dispatching update product..", product);
    dispatch(updateProductSuccess(product));
    return;
}

export const deleteProduct = (product) => dispatch => {
    
    console.log("deleting..", product);
    dispatch(deleteProductSuccess(product));
    return;
}