import { shallow } from 'enzyme';
import React from 'react';
import Footer from '../components/Footer';

describe('Footer test', () => {

    it("expect Footer component is rendered without crashing", () => {
        const wrapper = shallow(<Footer />);   
    });

    it("expect Footer component is rendered && match with the Snapshot", () => {
        const wrapper = shallow(<Footer />);   
        expect(shallow(<Footer />)).toMatchSnapshot();
    });
    
});

