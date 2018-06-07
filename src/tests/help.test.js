import React from 'react';
import {shallow} from 'enzyme';
import Help from '../components/main/help';
import configureStore from 'redux-mock-store';
const mockStore = configureStore();

describe('<Help />', () =>{
    it('should render component without crashing', () =>{
        shallow(<Help />);
    });
})