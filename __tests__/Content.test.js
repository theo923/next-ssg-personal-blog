import { shallow } from 'enzyme';
import React from 'react';
import Content from '../components/Content';

describe('Content test', () => {

    it("expect Content component is rendered without crashing", () => {
        const wrapper = shallow(<Content />);   
    });

    it("expect Content component is rendered && match with the Snapshot", () => {
        const wrapper = shallow(<Content />);   
        expect(shallow(<Content />)).toMatchSnapshot();
    });
    
});




