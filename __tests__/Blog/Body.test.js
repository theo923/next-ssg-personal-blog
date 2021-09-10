import { shallow } from "enzyme";
import React from "react";
import Body from "../../components/Blog/Body";

describe("Body test", () => {
    const mockBodyData = {};

    const setup = (props = {}, state = null) => {
        return shallow(<Body {...props} />);
    };

    const findJSXByAttr = (name, wrapper) => {
        return wrapper.find(`[data-test="${name}"]`);
    };

    it("expect Body component is rendered without crashing", () => {
        const wrapper = setup(mockBodyData, null);
    });

    it("expect component-blog-body is rendered", () => {
        const wrapper = setup(mockBodyData, null);
        const body = findJSXByAttr("component-blog-body", wrapper);
        expect(body.length).toBe(1);
    });
});
