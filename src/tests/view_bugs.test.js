import React from 'react';
import {shallow} from 'enzyme';
import ViewIssues from '../components/main/bugs/create_issue';
//import store from '../store';
import configureStore from 'redux-mock-store';
const mockStore = configureStore();

describe('<ViewIssues />', () =>{
    it('should render component without crashing', () =>{
        shallow(<ViewIssues store={mockStore({ runtime: {} })}/>);
    });
})