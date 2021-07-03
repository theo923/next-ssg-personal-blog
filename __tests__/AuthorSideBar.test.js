import { shallow } from 'enzyme';
import React from 'react';
import AuthorSideBar from '../components/Blog/AuthorSideBar';

describe('AuthorSideBar test', () => {

    it("expect AuthorSideBar component is rendered without crashing", () => {
        const wrapper = shallow(<AuthorSideBar />);   
    });

    it("expect AuthorSideBar component is rendered && match with the Snapshot", () => {
        const wrapper = shallow(<AuthorSideBar />);   
        expect(shallow(<AuthorSideBar />)).toMatchSnapshot();
    });
    
});

