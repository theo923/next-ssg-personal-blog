import { shallow } from 'enzyme';
import React from 'react';
import BlogNode from '../components/BlogNode';

describe('BlogNode test', () => {

    it("expect BlogNode component is rendered without crashing", () => {
        const wrapper = shallow(<BlogNode />);   
    });

    it("expect BlogNode component is rendered && match with the Snapshot", () => {
        const wrapper = shallow(<BlogNode />);   
        expect(shallow(<BlogNode />)).toMatchSnapshot();
    });
    
});

