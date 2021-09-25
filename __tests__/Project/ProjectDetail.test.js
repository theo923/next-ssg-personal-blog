import { shallow } from "enzyme";
import React from "react";
import ProjectDetail from "../../components/Project/ProjectDetail";

describe("ProjectDetail test", () => {
    const setup = (props = {}, state = null) => {
        return shallow(<ProjectDetail {...props} />);
    };

    const findJSXByAttr = (name, wrapper) => {
        return wrapper.find(`[data-test="${name}"]`);
    };

    it("expect ProjectDetail component is rendered without crashing", () => {
        const wrapper = setup();
    });

    it("expect component-projectDetail is rendered", () => {
        const wrapper = setup();
        const projectDetail = findJSXByAttr("component-projectDetail", wrapper);
        expect(projectDetail.length).toBe(1);
    });
});
