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

export const UPDATE_BUG_SUCCESS = 'UPDATE_BUG_SUCCESS';
export const updateBugSuccess = bug => ({
    type: UPDATE_BUG_SUCCESS,
    bug
});

export const UPDATE_BUG_FIELD_SUCCESS = 'UPDATE_BUG_FIELD_SUCCESS';
export const updateBugFieldSuccess = bug => ({
    type:UPDATE_BUG_FIELD_SUCCESS,
    bug
});

export const DELETE_BUG_SUCCESS = 'DELETE_BUG_SUCCESS';
export const deleteBugSuccess = bugNumber => ({
    type: DELETE_BUG_SUCCESS,
    bugNumber
});

export const BUGS_ERROR = 'BUGS_ERROR';
export const bugsError = error => ({
    type: BUGS_ERROR,
    error
});

export const createBug = (newBug) => dispatch => {
    console.log("dispatching create bug..", newBug);
    return fetch(`${API_BASE_URL}/bugs`,{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newBug)
        })
        .then(res => {
            
            return res.json();
        })
        .then((bug) => {
            if (!bug.ok) {
                console.log(bug);
                //dispatch(bugsError(res));
                return Promise.reject(bug.error);
            }
            return dispatch(createBugSuccess(bug));
        })
        .catch(err =>{
            console.log(err)
            dispatch(bugsError(err));
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
        })
        .catch(err =>{
            dispatch(bugsError(err));
        });
};//End Load Bugs action

export const updateBugField = (bug) => dispatch =>{
    console.log("dispatching update product fields..", bug);
    dispatch(updateBugFieldSuccess(bug));
    return;
};//End temp bug field updates

export const updateBug = (id, updatedBug) => dispatch => {
    console.log("saving changes to DB and dispatching update bug..", updatedBug);
    return fetch(`${API_BASE_URL}/bugs/${id}`,{
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updatedBug)
        })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((bugArray) => dispatch(updateBugSuccess(updatedBug)))
        .catch(err => {
            dispatch(bugsError(err));
    })
};//End Update Bug section

export const deleteBug = (bugNumber) => dispatch => {
    
    console.log("deleting..", bugNumber);
    return fetch(`${API_BASE_URL}/bugs/${bugNumber}`,{
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        }
        })
        .then(res => normalizeResponseErrors(res))
        .then(() => dispatch(deleteBugSuccess(bugNumber)))
        .catch(err => {
            console.log(err);
            dispatch(bugsError(err));
    })
};//End Delete bug action
