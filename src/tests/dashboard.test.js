import React from 'react';
import {shallow} from 'enzyme';
import {Main} from '../components/main';
import configureStore from 'redux-mock-store';
const mockStore = configureStore();

describe('<Main />', () =>{
    it('should render component without crashing', () =>{
        shallow(<Main store={mockStore({ runtime: {} })}/>);
    });
})