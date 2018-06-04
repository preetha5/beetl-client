import React from 'react';
import {shallow} from 'enzyme';
import {Header} from '../components/header';
//import store from '../store';
import configureStore from 'redux-mock-store';
const mockStore = configureStore();

describe('<Header />', () =>{
    it('should render component without crashing', () =>{
        shallow(<Header store={mockStore({ runtime: {} })}/>);
    });
})