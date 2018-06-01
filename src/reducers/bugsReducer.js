import * as actions from '../actions/bugActions';
import React, {Component} from 'react';
import {Redirect} from 'react-router';

let indexOfBugToUpdate='';
const initialState = {
    bugs: [],
    error: null
};

const LOAD = 'LOAD';

export const bugsReducer =(state=initialState, action) => {
  switch (action.type) {
    case actions.CREATE_BUG_SUCCESS:
        console.log(action.bug);
        console.log("state in create bug ",state);
        return Object.assign({}, state, {
            bugs: [...state.bugs, action.bug]
        });

    case actions.LOAD_BUGS_SUCCESS:
        console.log(action.bugs);
        console.log("state in load bugs",state);
        return Object.assign({}, state, {bugs:action.bugs});

    default:
      return state;
  }
};

/**
 * Simulates data loaded into this reducer from somewhere
 */
export const load = data => ({ type: LOAD, data });

export default bugsReducer;
