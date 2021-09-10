import { shallow } from "enzyme";
import React from "react";
import BlogPost from "../../components/Blog/BlogPost";

describe("BlogPost test", () => {
    const mockBlogPostData = {};

    const setup = (props = {}, state = null) => {
        return shallow(<BlogPost {...props} />);
    };

    const findJSXByAttr = (name, wrapper) => {
        return wrapper.find(`[data-test="${name}"]`);
    };

    it("expect BlogPost component is rendered without crashing", () => {
        const wrapper = setup(mockBlogPostData, null);
    });

    it("expect component-blog-blogPost is rendered", () => {
        const wrapper = setup(mockBlogPostData, null);
        const blogPost = findJSXByAttr("component-blog-blogPost", wrapper);
        expect(blogPost.length).toBe(1);
    });
});
