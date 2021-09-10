import { shallow } from "enzyme";
import React from "react";
import Footer from "../components/Footer";

describe("Footer test", () => {
    const setup = (props = {}, state = null) => {
        return shallow(<Footer {...props} />);
    };

    const findJSXByAttr = (name, wrapper) => {
        return wrapper.find(`[data-test="${name}"]`);
    };

    it("expect Footer component is rendered without crashing", () => {
        const wrapper = setup();
    });

    it("expect component-app-footer is rendered", () => {
        const wrapper = setup();
        const footer = findJSXByAttr("component-app-footer", wrapper);
        expect(footer.length).toBe(1);
    });
});
