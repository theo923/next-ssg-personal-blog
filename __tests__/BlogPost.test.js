import { shallow } from 'enzyme';
import React from 'react';
import BlogPost from '../components/Blog/BlogPost';

describe('BlogPost test', () => {
    const mockBlogPostData = {}

    it("expect BlogPost component is rendered without crashing", () => {
        const wrapper = shallow(<BlogPost mockBlogPostData={mockBlogPostData} />);   
    });

    it("expect BlogPost component is rendered && match with the Snapshot", () => {
        const wrapper = shallow(<BlogPost mockBlogPostData={mockBlogPostData} />);   
        expect(shallow(<BlogPost mockBlogPostData={mockBlogPostData} />)).toMatchSnapshot();
    });
    
});

