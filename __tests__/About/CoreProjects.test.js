import { shallow } from "enzyme";
import React from "react";
import CoreProjects from "../../components/About/CoreProjects";

describe("CoreProjects test", () => {
    const setup = (props = {}, state = null) => {
        return shallow(<CoreProjects {...props} />);
    };

    const findJSXByAttr = (name, wrapper) => {
        return wrapper.find(`[data-test="${name}"]`);
    };

    it("expect CoreProjects component is rendered without crashing", () => {
        const wrapper = setup();
    });

    it("expect component-coreProjects is rendered", () => {
        const wrapper = setup();
        const coreProjects = findJSXByAttr("component-coreProjects", wrapper);
        expect(coreProjects.length).toBe(1);
    });
});
