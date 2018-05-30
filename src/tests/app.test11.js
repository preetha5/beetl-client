import React from 'react';
import {shallow, mount, render} from 'enzyme';
import App from '../components/app';

describe('<App />', () =>{
    it('should render component without crashing', () =>{
        const dispatch = jest.fn();
        render(<App />);
    });
})