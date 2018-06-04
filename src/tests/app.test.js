import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {App} from '../components/app';
import configureStore from 'redux-mock-store';
const mockStore = configureStore();

describe('<App />', () =>{
    it('should render component without crashing', () =>{
        const dispatch = jest.fn();
        shallow(<App store={mockStore({ runtime: {} })}/>);
    });
})