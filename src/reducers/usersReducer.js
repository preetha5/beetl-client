import * as actions from '../actions/userActions';

const initialState = {
    users: [],
    error: null
};

let indexOfUserToUpdate='';

export const usersReducer =(state=initialState, action) => {
    switch(action.type) {
        case actions.LOAD_USERS_SUCCESS:
            return Object.assign({}, state, {users:action.users});

        case actions.CREATE_USER_SUCCESS:
            return Object.assign({}, state, {
                users: [...state.users, action.user]
            });    
        
        case actions.UPDATE_USER_FIELD_SUCCESS:
            const fieldUpdateState = [...state.users];
            indexOfUserToUpdate = state.users.findIndex((user) => {
                return user.id === action.user.id
              })
            fieldUpdateState[indexOfUserToUpdate] = action.user;
            return Object.assign({}, state,{users:fieldUpdateState});

        case actions.UPDATE_USER_SUCCESS:
            const updateUserState = [...state.users];
            indexOfUserToUpdate = state.users.findIndex((user) => {
                return user.id === action.user.id
              })
            updateUserState[indexOfUserToUpdate] = action.user;
            return Object.assign({}, state,{users:updateUserState});
            
        case actions.DELETE_USER_SUCCESS:
            const newState = [...state.users];
            const indexOfUserToDelete = state.users.findIndex((user) => {
                return user.id === action.userId;
              })
            newState.splice(indexOfUserToDelete, 1);
            return Object.assign({}, state,{users:newState});

        case actions.USERS_ERROR:
            return Object.assign({}, state, {
                error: action.error
            });

        default:
            return state
    }
}