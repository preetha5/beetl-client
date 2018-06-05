import {CREATE_USER_SUCCESS, createUserSuccess,
    LOAD_USERS_SUCCESS, loadUsersSuccess ,
    UPDATE_USER_SUCCESS, updateUserSuccess,
    DELETE_USER_SUCCESS, deleteUserSuccess} 
    from '../actions/userActions';

describe('createUserSuccess', () => {
    it('Should return the action', () => {
        const user='';
        const action = createUserSuccess(user);
        expect(action).toEqual({
            type: CREATE_USER_SUCCESS,
            user
        });
    });
});//End Describe for createUserSuccess

describe('loadUsersSuccess', () => {
    it('Should return the action', () => {
        const users=[];
        const action = loadUsersSuccess(users);
        expect(action).toEqual({
            type: LOAD_USERS_SUCCESS,
            users
        });
    });
});//End Describe for loadUsersSuccess

describe('updateUserSuccess', () => {
    it('Should return the action', () => {
        const user={};
        const action = updateUserSuccess(user);
        expect(action).toEqual({
            type: UPDATE_USER_SUCCESS,
            user
        });
    });
});//End Describe for updateUserSuccess

describe('deleteUserSuccess', () => {
    it('Should return the action', () => {
        const userId = 12345;
        const action = deleteUserSuccess(userId);
        expect(action).toEqual({
            type: DELETE_USER_SUCCESS,
            userId
        });
    });
});//End Describe for deleteUserSuccess