import React from 'react';
import {shallow} from 'enzyme';
import LandingPage from '../components/landing-page';
//import store from '../store';
import configureStore from 'redux-mock-store';
const mockStore = configureStore();

describe('<LandingPage />', () =>{
    it('should render component without crashing', () =>{
        shallow(<LandingPage />);
    });
})