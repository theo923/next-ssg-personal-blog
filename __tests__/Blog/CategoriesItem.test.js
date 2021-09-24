import { shallow } from "enzyme";
import React from "react";
import CategoriesItem from "../../components/Blog/CategoriesItem";

describe("CategoriesItem test", () => {
    const setup = (props = {}, state = null) => {
        return shallow(<CategoriesItem {...props} />);
    };

    const findJSXByAttr = (name, wrapper) => {
        return wrapper.find(`[data-test="${name}"]`);
    };

    it("expect CategoriesItem component is rendered without crashing", () => {
        const wrapper = setup();
    });

    it("expect component-blog-categoriesItem is rendered", () => {
        const wrapper = setup();
        const CategoriesItem = findJSXByAttr(
            "component-blog-categoriesItem",
            wrapper
        );
        expect(CategoriesItem.length).toBe(1);
    });
});
