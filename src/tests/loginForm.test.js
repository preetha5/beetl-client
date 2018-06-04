import React from 'react';
import {shallow} from 'enzyme';
//import store from '../store';
import LoginForm from '../components/login/loginForm';
import configureStore from 'redux-mock-store';
const mockStore = configureStore();

describe('<LoginForm />', () =>{
    it('should render component without crashing', () =>{
        shallow(<LoginForm store={mockStore({ runtime: {} })}/>);
    });
})