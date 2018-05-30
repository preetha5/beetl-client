import React from 'react';
import {shallow} from 'enzyme';
import Header from '../components/header';
import store from '../store';

describe('<Header />', () =>{
    it('should render component without crashing', () =>{
        const wrapper = shallow(<Header />).dive();
    });
})