import React from 'react';
import {Redirect} from 'react-router';
import {SubmissionError} from 'redux-form';
import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from '../utils/normalizeErrors';

export const CREATE_BUG_SUCCESS = 'CREATE_BUG_SUCCESS';
export const createBugSuccess = bug => ({
    type: CREATE_BUG_SUCCESS,
    bug
});

export const LOAD_BUGS_SUCCESS = 'LOAD_BUGS_SUCCESS';
export const loadBugsSuccess = bugs => ({
    type: LOAD_BUGS_SUCCESS,
    bugs
});


export const createBug = (newBug) => dispatch => {
    console.log("dispatching create bug..", newBug);
    fetch(`${API_BASE_URL}/bugs`,{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newBug)
        })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then((bug) => {
            dispatch(createBugSuccess(bug));
        });
} //End Create bugs actions

export const loadBugs = () => dispatch => {
    return fetch(`${API_BASE_URL}/bugs`,{
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
        })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(bugs => {
            dispatch(loadBugsSuccess(bugs));
        });
};//End Load Bugs action
