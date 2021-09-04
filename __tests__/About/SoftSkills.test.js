import { shallow } from "enzyme";
import React from "react";
import SoftSkills from "../../components/About/SoftSkills";

describe("SoftSkills test", () => {
  const setup = (props = {}, state = null) => {
    return shallow(<SoftSkills {...props} />);
  };

  const findJSXByAttr = (name, wrapper) => {
    return wrapper.find(`[data-test="${name}"]`);
  };

  it("expect SoftSkills component is rendered without crashing", () => {
    const wrapper = setup();
  });

  it("expect component-SoftSkills is rendered", () => {
    const wrapper = setup();
    const softSkills = findJSXByAttr("component-softSkills", wrapper);
    expect(softSkills.length).toBe(1);
  });
});
