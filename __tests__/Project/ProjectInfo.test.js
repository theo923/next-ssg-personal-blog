import { shallow } from "enzyme";
import React from "react";
import ProjectInfo from "../../components/Project/ProjectInfo";

describe("ProjectInfo test", () => {
    const setup = (props = {}, state = null) => {
        return shallow(<ProjectInfo {...props} />);
    };

    const findJSXByAttr = (name, wrapper) => {
        return wrapper.find(`[data-test="${name}"]`);
    };

    it("expect ProjectInfo component is rendered without crashing", () => {
        const wrapper = setup();
    });

    it("expect component-project is rendered", () => {
        const wrapper = setup();
        const projectInfo = findJSXByAttr("component-project", wrapper);
        expect(projectInfo.length).toBe(1);
    });
});
