import { shallow } from "enzyme";
import React from "react";
import CompleteSkillSets from "../../components/About/CompleteSkillSets";

describe("CompleteSkillSets test", () => {
    const setup = (props = {}, state = null) => {
        return shallow(<CompleteSkillSets {...props} />);
    };

    const findJSXByAttr = (name, wrapper) => {
        return wrapper.find(`[data-test="${name}"]`);
    };

    it("expect CompleteSkillSets component is rendered without crashing", () => {
        const wrapper = setup();
    });

    it("expect component-completeSkillSets is rendered", () => {
        const wrapper = setup();
        const completeSkillSets = findJSXByAttr(
            "component-completeSkillSets",
            wrapper
        );
        expect(completeSkillSets.length).toBe(1);
    });
});
