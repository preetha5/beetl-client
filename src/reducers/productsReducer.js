import * as actions from '../actions/productActions';

let indexOfProductToUpdate='';
const initialState = {
    products: [],
    error: null
};

export const productsReducer =(state=initialState, action) => {
    switch(action.type) {

        case actions.LOAD_PRODUCTS_SUCCESS:
            console.log(action.products);
            return Object.assign({}, state, {products:action.products});

        case actions.CREATE_PRODUCT_SUCCESS:
            console.log(action.product);
            return Object.assign({}, state, {
                products: [...state.products, action.product]
            });

        case actions.UPDATE_PRODUCT_FIELD_SUCCESS:
            console.log(action.product);
            const fieldUpdateState = [...state.products];
            indexOfProductToUpdate = state.products.findIndex((product) => {
                return product._id === action.product._id
              })
            fieldUpdateState[indexOfProductToUpdate] = action.product;
            return Object.assign({}, state,{products:fieldUpdateState});
            
        case actions.UPDATE_PRODUCT_SUCCESS:
            const updateProductState = [...state.products];
            const indexOfProductObj = state.products.findIndex((product) => {
                return product._id === action.product._id
              })
              updateProductState[indexOfProductObj] = action.product;
              return Object.assign({}, state,{products:updateProductState});

        case actions.DELETE_PRODUCT_SUCCESS:
            const newState = [...state.products];
            console.log(action.product);
            const indexOfProductToDelete = state.products.findIndex((product) => {
                return product._id === action.productId;
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