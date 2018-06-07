import React from 'react';
import {shallow} from 'enzyme';
import CreateIssue from '../components/main/bugs/create_issue';
//import store from '../store';
import configureStore from 'redux-mock-store';
const mockStore = configureStore();

describe('<CreateIssue />', () =>{
    it('should render component without crashing', () =>{
        shallow(<CreateIssue store={mockStore({ runtime: {} })}/>);
    });
})