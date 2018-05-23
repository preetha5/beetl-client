import * as actions from '../actions/userActions';
import React, {Component} from 'react';
import {Redirect} from 'react-router';
//import initialState from './initialState';

//temp code until backend is ready
let temp = Math.floor(Math.random()*20);

let indexOfUserToUpdate='';

export const usersReducer =(state=[], action) => {
    switch(action.type) {
        case actions.LOAD_USERS_SUCCESS:
            console.log(action.users);
            console.log("state in load users",{...state,users:action.users});
            //return action.users;
            return Object.assign({}, state, {users:action.users});

        case actions.CREATE_USER_SUCCESS:
            console.log(action.user);
            console.log("state in create users ",state);
            return Object.assign({}, state, {
                users: [...state.users, action.user]
            });
            // return [...state.users.filter(user => user.id !== action.user.id),
            //     Object.assign({}, action.user)
            // ]         
        
        case actions.UPDATE_USER_FIELD_SUCCESS:
            console.log(action.user);
            console.log("state in field update",state);
            //const updateState = [...state];
            //return [...state];
            const fieldUpdateState = [...state.users];
            console.log(fieldUpdateState);
            indexOfUserToUpdate = state.users.findIndex((user) => {
                return user.id == action.user.id
              })
            fieldUpdateState[indexOfUserToUpdate] = action.user;
            console.log(fieldUpdateState);
            return Object.assign({}, state,{users:fieldUpdateState});
            // return [...state.filter(user => user.id !== action.user.id),
            //     Object.assign({}, action.user)];
        case actions.UPDATE_USER_SUCCESS:
            console.log(action.user);
            console.log("state in user update to db",state);
            const updateUserState = [...state.users];
            indexOfUserToUpdate = state.users.findIndex((user) => {
                return user.id == action.user.id
              })
            updateUserState[indexOfUserToUpdate] = action.user;
            console.log(updateUserState);
            return Object.assign({}, state,{users:updateUserState});
            // return [...state.filter(user => user.id !== action.user.id),
            // Object.assign({}, action.user)]
        case actions.DELETE_USER_SUCCESS:
            const newState = [...state.users];
            console.log(action.user);
            console.log(newState);
            const indexOfUserToDelete = state.users.findIndex((user) => {
                return user.id == action.user.id
              })
            console.log("index",indexOfUserToDelete);
            newState.splice(indexOfUserToDelete, 1);
            console.log(newState);
            return Object.assign({}, state,{users:newState});
        default:
        return state
    }
}