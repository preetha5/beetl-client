//const LOAD = 'redux-form-examples/account/LOAD';
const LOAD = 'LOAD';
const reducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD:
        console.log(action.data);
      return {
        data: action.data,
      };
    default:
      return state;
  }
};

/**
 * Simulates data loaded into this reducer from somewhere
 */
export const load = data => ({ type: LOAD, data });

export default reducer;
