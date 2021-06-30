import { shallow } from 'enzyme';
import React from 'react';
import AuthorInfo from '../components/AuthorInfo';

describe('AuthorInfo test', () => {

    it("expect AuthorInfo component is rendered without crashing", () => {
        const wrapper = shallow(<AuthorInfo />);   
    });

    it("expect AuthorInfo component is rendered && match with the Snapshot", () => {
        const wrapper = shallow(<AuthorInfo />);   
        expect(shallow(<AuthorInfo />)).toMatchSnapshot();
    });
    
});




