import { shallow } from "enzyme";
import React from "react";
import AboutProject from "../../components/About/AboutProject";

describe("AboutProject test", () => {
    const setup = (props = {}, state = null) => {
        return shallow(<AboutProject {...props} />);
    };

    const findJSXByAttr = (name, wrapper) => {
        return wrapper.find(`[data-test="${name}"]`);
    };

    it("expect AboutProject component is rendered without crashing", () => {
        const wrapper = setup();
    });

    it("expect component-aboutProject is rendered", () => {
        const wrapper = setup();
        const AboutProject = findJSXByAttr("component-aboutProject", wrapper);
        expect(AboutProject.length).toBe(1);
    });
});
