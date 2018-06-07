import React from 'react';
import {shallow} from 'enzyme';
import Footer from '../components/footer';
//import store from '../store';
import configureStore from 'redux-mock-store';
const mockStore = configureStore();

describe('<Footer />', () =>{
    it('should render component without crashing', () =>{
        shallow(<Footer store={mockStore({ runtime: {} })}/>);
    });
})