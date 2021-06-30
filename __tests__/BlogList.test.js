import { shallow } from 'enzyme';
import React from 'react';
import BlogList from '../components/BlogList';

describe('BlogList test', () => {
    const MockBlogListItem = {}

    it("expect BlogList component is rendered without crashing", () => {
        const wrapper = shallow(<BlogList MockBlogListItem={MockBlogListItem} />);   
    });

    it("expect BlogList component is rendered && match with the Snapshot", () => {
        const wrapper = shallow(<BlogList MockBlogListItem={MockBlogListItem} />);   
        expect(shallow(<BlogList />)).toMatchSnapshot();
    });
    
});
