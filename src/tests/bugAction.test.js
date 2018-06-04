import {CREATE_BUG_SUCCESS, createBugSuccess,
    LOAD_BUGS_SUCCESS, loadBugsSuccess,
    UPDATE_BUG_SUCCESS, updateBugSuccess,
    DELETE_BUG_SUCCESS, deleteBugSuccess} 
    from '../actions/bugActions';

describe('createBugSuccess', () => {
    it('Should return the action', () => {
        const bug='';
        const action = createBugSuccess(bug);
        expect(action).toEqual({
            type: CREATE_BUG_SUCCESS,
            bug
        });
    });
});//End Describe for createBugSuccess

describe('loadBugsSuccess', () => {
    it('Should return the action', () => {
        const bugs=[];
        const action = loadBugsSuccess(bugs);
        expect(action).toEqual({
            type: LOAD_BUGS_SUCCESS,
            bugs
        });
    });
});//End Describe for loadBugsSuccess

describe('updateBugSuccess', () => {
    it('Should return the action', () => {
        const bug={};
        const action = updateBugSuccess(bug);
        expect(action).toEqual({
            type: UPDATE_BUG_SUCCESS,
            bug
        });
    });
});//End Describe for updateBugSuccess

describe('deleteBugSuccess', () => {
    it('Should return the action', () => {
        const bugNumber = 12345;
        const action = deleteBugSuccess(bugNumber);
        expect(action).toEqual({
            type: DELETE_BUG_SUCCESS,
            bugNumber
        });
    });
});//End Describe for deleteBugSuccess