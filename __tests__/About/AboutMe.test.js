import { shallow } from "enzyme";
import React from "react";
import AboutMe from "../../components/About/AboutMe";

describe("AboutMe test", () => {
    const setup = (props = {}, state = null) => {
        return shallow(<AboutMe {...props} />);
    };

    const findJSXByAttr = (name, wrapper) => {
        return wrapper.find(`[data-test="${name}"]`);
    };

    it("expect AboutMe component is rendered without crashing", () => {
        const wrapper = setup();
    });

    it("expect component-aboutme is rendered", () => {
        const wrapper = setup();
        const aboutMe = findJSXByAttr("component-aboutme", wrapper);
        expect(aboutMe.length).toBe(1);
    });
});
