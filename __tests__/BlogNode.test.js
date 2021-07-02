import { shallow } from 'enzyme';
import React from 'react';
import BlogNode from '../components/BlogNode';

describe('BlogNode test', () => {
    const mockBlogNodeData = {}

    it("expect BlogNode component is rendered without crashing", () => {
        const wrapper = shallow(<BlogNode mockBlogNodeData={mockBlogNodeData} />);   
    });

    it("expect BlogNode component is rendered && match with the Snapshot", () => {
        const wrapper = shallow(<BlogNode mockBlogNodeData={mockBlogNodeData} />);   
        expect(shallow(<BlogNode mockBlogNodeData={mockBlogNodeData} />)).toMatchSnapshot();
    });
    
});

