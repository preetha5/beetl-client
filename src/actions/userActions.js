import {SubmissionError} from 'redux-form';
import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from '../utils/normalizeErrors';

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
export const deleteUserSuccess = userId => ({
    type: DELETE_USER_SUCCESS,
    userId
});

export const USERS_ERROR = 'USERS_ERROR';
export const usersError = error => ({
    type: USERS_ERROR,
    error
});

export const registerUser = user => dispatch => {
    console.log('dispatching user ', user);
    return fetch(`${API_BASE_URL}/users`, {
        //mode: 'cors',
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
        })
        .then(res => {console.log(res); normalizeResponseErrors(res)})
        .then(res => res.json())
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};

export const loadUsers = () => dispatch => {
    return fetch(`${API_BASE_URL}/users`,{
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
        })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(users => {
            dispatch(loadUsersSuccess(users));
        });
};

export const createUser = (NewUser) => dispatch => {
    console.log("dispatching create user..", NewUser);
    return fetch(`${API_BASE_URL}/users`, {
        //mode: 'cors',
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(NewUser)
        })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then((user) => {
            dispatch(createUserSuccess(user));
        })
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
            dispatch(usersError(err));
        });
}

export const updateUserField = (user) => dispatch =>{
    console.log("dispatching update userfields..", user);
    dispatch(updateUserFieldSuccess(user));
    return;
}

export const updateUser = (userId, user) => dispatch => {
    fetch(`${API_BASE_URL}/users/${userId}`,{
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => normalizeResponseErrors(res))
    .then(user => {
        dispatch(updateUserSuccess(user));
    })
    .catch(err =>{
        console.log(err);
        dispatch(usersError(err));
    });
}

export const deleteUser = (userId) => dispatch => {
    return fetch(`${API_BASE_URL}/users/${userId}`,{
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        }
        })
        .then(res => normalizeResponseErrors(res))
        .then(() => {
            console.log("deleting..", userId);
            dispatch(deleteUserSuccess(userId))
        })
        .catch(err => {
            dispatch(usersError(err));
        })
}