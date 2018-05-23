import React from 'react';
import {Redirect} from 'react-router';

export const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';
export const loadUsersSuccess = users => ({
    type: LOAD_USERS_SUCCESS,
    users
});

export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const createUserSuccess = user => ({
    type: CREATE_USER_SUCCESS,
    user
});

export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const updateUserSuccess = user => ({
    type: UPDATE_USER_SUCCESS,
    user
});

export const UPDATE_USER_FIELD_SUCCESS = 'UPDATE_USER_FIELD_SUCCESS';
export const updateUserFieldSuccess = user => ({
    type:UPDATE_USER_FIELD_SUCCESS,
    user
});

export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const deleteUserSuccess = user => ({
    type: DELETE_USER_SUCCESS,
    user
});

const userArr= [{
    id:0,
    firstName:"Jane",
    lastName:"Dev",

    email:"jane@microsoft.com",
    role:'developer'
    },{
    id:1,
    firstName:"John",
    lastName:"Dev",

    email:"john@microsoft.com",
    role:'developer'
}];

export const loadUsers = () => dispatch => {
    // return fetch('/api/users').then(res => {
    //     if (!res.ok) {
    //         return Promise.reject(res.statusText);
    //     }
    //     return res.json();
    // }).then(users => {
    //     dispatch(loadUsersSuccess(users));
    // });
    console.log("dispatching loadUsers..");
    dispatch(loadUsersSuccess(userArr));
    return;
};

export const createUser = (NewUser) => dispatch => {
    console.log("dispatching create user..", NewUser);
    dispatch(createUserSuccess(NewUser));
    return ;
}

export const updateUserField = (user) => dispatch =>{
    console.log("dispatching update userfields..", user);
    dispatch(updateUserFieldSuccess(user));
    return;
}

export const updateUser = (user) => dispatch => {
    // return fetch('/api/users').then(res => {
    //     if (!res.ok) {
    //         return Promise.reject(res.statusText);
    //     }
    //     return res.json();
    // }).then(users => {
    //     dispatch(loadUsersSuccess(users));
    // });
    console.log("saving changes to DB and dispatching update user..", user);
    dispatch(updateUserSuccess(user));
    return;
}

export const deleteUser = (user) => dispatch => {
    // return fetch('/api/users').then(res => {
    //     if (!res.ok) {
    //         return Promise.reject(res.statusText);
    //     }
    //     return res.json();
    // }).then(users => {
    //     dispatch(loadUsersSuccess(users));
    // });
    console.log("deleting..", user);
    dispatch(deleteUserSuccess(user));
    // <Redirect to='/users' />
    return;
}