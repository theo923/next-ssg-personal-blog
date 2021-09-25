import { shallow } from "enzyme";
import React from "react";
import Skill from "../../components/About/Skill";

describe("Skill test", () => {
    const setup = (props = {}, state = null) => {
        return shallow(<Skill {...props} />);
    };

    const findJSXByAttr = (name, wrapper) => {
        return wrapper.find(`[data-test="${name}"]`);
    };

    it("expect Skill component is rendered without crashing", () => {
        const wrapper = setup();
    });

    it("expect component-skill is rendered", () => {
        const wrapper = setup();
        const Skill = findJSXByAttr("component-skill", wrapper);
        expect(Skill.length).toBe(1);
    });
});
