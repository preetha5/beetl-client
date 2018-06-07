import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from '../utils/normalizeErrors';

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
export const deleteProductSuccess = productId => ({
    type: DELETE_PRODUCT_SUCCESS,
    productId
});

export const PRODUCTS_ERROR = 'PRODUCTS_ERROR';
export const productsError = error => ({
    type: PRODUCTS_ERROR,
    error
});


export const loadProducts = () => dispatch => {
    console.log("dispatching load products..");
    return fetch(`${API_BASE_URL}/products`,{
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
        })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((productArray) => dispatch(loadProductsSuccess(productArray)))
        .catch(err => {
            dispatch(productsError(err));
        })
};

export const createProduct = (newProduct) => dispatch => {
    console.log("dispatching create prod..", newProduct);
    fetch(`${API_BASE_URL}/products`,{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newProduct)
        })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then((product) => {
            dispatch(createProductSuccess(product));
        });
}

export const updateProductField = (product) => dispatch =>{
    console.log("dispatching update product fields..", product);
    dispatch(updateProductFieldSuccess(product));
    return;
}

export const updateProduct = (id, updatedProd) => dispatch => {
    console.log("saving changes to DB and dispatching update product..", updatedProd);
    return fetch(`${API_BASE_URL}/products/${id}`,{
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updatedProd)
        })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((productArray) => dispatch(updateProductSuccess(updatedProd)))
        .catch(err => {
            dispatch(productsError(err));
    })
}

export const deleteProduct = (productId) => dispatch => {
    
    console.log("deleting..", productId);
    return fetch(`${API_BASE_URL}/products/${productId}`,{
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        }
        })
        .then(res => normalizeResponseErrors(res))
        .then(() => dispatch(deleteProductSuccess(productId)))
        .catch(err => {
            console.log(err);
            dispatch(productsError(err));
    })
}