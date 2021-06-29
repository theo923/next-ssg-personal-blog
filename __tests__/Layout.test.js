import { shallow } from 'enzyme';
import React from 'react';
import Layout from '../components/Layout';

describe('Layout test', () => {

    it("expect Layout component is rendered without crashing", () => {
        const wrapper = shallow(<Layout />);   
    });

    it("expect Layout component is rendered && match with the Snapshot", () => {
        const wrapper = shallow(<Layout />);   
        expect(shallow(<Layout />)).toMatchSnapshot();
    });
    
});




