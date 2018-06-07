import * as actions from '../actions/bugActions';

let indexOfBugToUpdate='';
const initialState = {
    bugs: [],
    error: null
};

export const bugsReducer =(state=initialState, action) => {
  switch (action.type) {
    case actions.CREATE_BUG_SUCCESS:
        console.log(action.bug);
        console.log("state in create bug ",[...state.bugs, action.bug]);
        return Object.assign({}, state, {
            bugs: state.bugs.concat(action.bug)
        });

    case actions.LOAD_BUGS_SUCCESS:
        console.log(action.bugs);
        console.log("state in load bugs",state);
        return Object.assign({}, state, {bugs:action.bugs});
    
    case actions.UPDATE_BUG_FIELD_SUCCESS:
        console.log(action.bug);
        console.log("state in field update",state);
        const fieldUpdateState = [...state.bugs];
        console.log(fieldUpdateState);
        indexOfBugToUpdate = state.bugs.findIndex((bug) => {
            return bug._id === action.bug._id
          })
        console.log("indexOfBugToUpdate ", indexOfBugToUpdate);
        fieldUpdateState[indexOfBugToUpdate] = action.bug;
        console.log(fieldUpdateState);
        return Object.assign({}, state,{bugs:fieldUpdateState});

    case actions.UPDATE_BUG_SUCCESS:
        console.log(action.bug);
        console.log("state in bug update to db",state);
        const updateBugState = [...state.bugs];
        indexOfBugToUpdate = state.bugs.findIndex((bug) => {
            return bug.id === action.bug.id
            })
        updateBugState[indexOfBugToUpdate] = action.bug;
        return Object.assign({}, state,{bugs:updateBugState});

    case actions.DELETE_BUG_SUCCESS:
        const newState = [...state.bugs];
        console.log(action.bugNumber);
        const indexOfBugToDelete = state.bugs.findIndex((bug) => {
            return bug.bugId === action.bugNumber;
          })
        newState.splice(indexOfBugToDelete, 1);
        console.log(newState);
        return Object.assign({}, state,{bugs:newState});
    
    case actions.BUGS_ERROR:
        console.log(action.error);
        return Object.assign({}, state, {
            error: action.error
        });
    default:
      return state;
  }
};


export default bugsReducer;
