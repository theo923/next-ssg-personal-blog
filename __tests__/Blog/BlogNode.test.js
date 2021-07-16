import { shallow } from 'enzyme';
import React from 'react';
import BlogNode from '../../components/Blog/BlogNode';

describe('BlogNode test', () => {
    const mockPost = "";
    const mockData = {};

    const setup = (props={}, state=null) => {
        return shallow(<BlogNode {...props} />)
    }

    const findJSXByAttr = (name, wrapper) => {
        return wrapper.find(`[data-test="${name}"]`)
    }

    it("expect BlogNode component is rendered without crashing", () => {
        const wrapper = setup((mockPost, mockData), null);   
    });

    it("expect component-blog-blogNode is rendered", () => {
        const wrapper = setup((mockPost, mockData), null);   
        const blogNode = findJSXByAttr("component-blog-blogNode", wrapper)
        expect(blogNode.length).toBe(1);
    });
    
});
