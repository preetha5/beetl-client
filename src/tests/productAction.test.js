import {CREATE_PRODUCT_SUCCESS, createProductSuccess,
    LOAD_PRODUCTS_SUCCESS, loadProductsSuccess ,
    UPDATE_PRODUCT_SUCCESS, updateProductSuccess,
    DELETE_PRODUCT_SUCCESS, deleteProductSuccess} 
    from '../actions/productActions';

describe('createProductSuccess', () => {
    it('Should return the action', () => {
        const product='';
        const action = createProductSuccess(product);
        expect(action).toEqual({
            type: CREATE_PRODUCT_SUCCESS,
            product
        });
    });
});//End Describe for createProductSuccess

describe('loadProductsSuccess', () => {
    it('Should return the action', () => {
        const products=[];
        const action = loadProductsSuccess(products);
        expect(action).toEqual({
            type: LOAD_PRODUCTS_SUCCESS,
            products
        });
    });
});//End Describe for loadProductsSuccess

describe('updateProductSuccess', () => {
    it('Should return the action', () => {
        const product={};
        const action = updateProductSuccess(product);
        expect(action).toEqual({
            type: UPDATE_PRODUCT_SUCCESS,
            product
        });
    });
});//End Describe for updateProductSuccess

describe('deleteProductSuccess', () => {
    it('Should return the action', () => {
        const productId = 12345;
        const action = deleteProductSuccess(productId);
        expect(action).toEqual({
            type: DELETE_PRODUCT_SUCCESS,
            productId
        });
    });
});//End Describe for deleteProductSuccess