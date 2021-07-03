import { shallow } from 'enzyme';
import React from 'react';
import ContactMe from '../components/Contact/ContactMe';

describe('ContactMe test', () => {

    it("expect ContactMe component is rendered without crashing", () => {
        const wrapper = shallow(<ContactMe />);   
    });

    it("expect ContactMe component is rendered && match with the Snapshot", () => {
        const wrapper = shallow(<ContactMe />);   
        expect(shallow(<ContactMe />)).toMatchSnapshot();
    });
    
});





