import { shallow } from "enzyme";
import React from "react";
import BlogList from "../../components/Blog/BlogList";

describe("BlogList test", () => {
    const MockBlogListItem = {};

    const setup = (props = {}, state = null) => {
        return shallow(<BlogList {...props} />);
    };

    const findJSXByAttr = (name, wrapper) => {
        return wrapper.find(`[data-test="${name}"]`);
    };

    it("expect BlogList component is rendered without crashing", () => {
        const wrapper = setup(MockBlogListItem, null);
    });

    it("expect component-blog-blogList is rendered", () => {
        const wrapper = setup(MockBlogListItem, null);
        const blogList = findJSXByAttr("component-blog-blogList", wrapper);
        expect(blogList.length).toBe(1);
    });
});
