import { shallow } from 'enzyme';
import React from 'react';
import Body from '../components/Blog/Body';

describe('Body test', () => {

    it("expect Body component is rendered without crashing", () => {
        const wrapper = shallow(<Body />);   
    });

    it("expect Body component is rendered && match with the Snapshot", () => {
        const wrapper = shallow(<Body />);   
        expect(shallow(<Body />)).toMatchSnapshot();
    });
    
});

