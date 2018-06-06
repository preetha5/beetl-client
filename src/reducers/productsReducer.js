import * as actions from '../actions/productActions';
import React, {Component} from 'react';
import {Redirect} from 'react-router';
//import initialState from './initialState';

//temp code until backend is ready
let temp = Math.floor(Math.random()*20);
let indexOfProductToUpdate='';
const initialState = {
    products: [],
    error: null
};

export const productsReducer =(state=initialState, action) => {
    switch(action.type) {

        case actions.LOAD_PRODUCTS_SUCCESS:
            console.log(action.products);
            console.log("state in load products",state);
            return Object.assign({}, state, {products:action.products});

        case actions.CREATE_PRODUCT_SUCCESS:
            console.log(action.product);
            console.log("state in create product ",state);
            return Object.assign({}, state, {
                products: [...state.products, action.product]
            });

        case actions.UPDATE_PRODUCT_FIELD_SUCCESS:
            console.log(action.product);
            console.log("state in field update",state);
            const fieldUpdateState = [...state.products];
            console.log(fieldUpdateState);
            indexOfProductToUpdate = state.products.findIndex((product) => {
                return product._id == action.product._id
              })
            console.log("indexOfProductToUpdate ", indexOfProductToUpdate);
            fieldUpdateState[indexOfProductToUpdate] = action.product;
            console.log(fieldUpdateState);
            return Object.assign({}, state,{products:fieldUpdateState});
            
        case actions.UPDATE_PRODUCT_SUCCESS:
            console.log(action.product);
            console.log("state in product update to db",state);
            const updateProductState = [...state.products];
            const indexOfProductObj = state.products.findIndex((product) => {
                return product._id == action.product._id
              })
              updateProductState[indexOfProductObj] = action.product;
              return Object.assign({}, state,{products:updateProductState});

        case actions.DELETE_PRODUCT_SUCCESS:
            const newState = [...state.products];
            console.log(action.product);
            const indexOfProductToDelete = state.products.findIndex((product) => {
                return product._id == action.productId;
              })
            newState.splice(indexOfProductToDelete, 1);
            console.log(newState);
            return Object.assign({}, state,{products:newState});

        case actions.PRODUCTS_ERROR:
            return Object.assign({}, state, {
                error: action.error
            });
            
        default:
        return state
    }
}