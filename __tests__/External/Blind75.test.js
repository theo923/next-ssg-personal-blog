import { shallow } from "enzyme";
import React from "react";
import Blind75 from "../../components/External/Blind75";

describe("Blind75 test", () => {
  const setup = (props = {}, state = null) => {
    return shallow(<Blind75 {...props} />);
  };

  const findJSXByAttr = (name, wrapper) => {
    return wrapper.find(`[data-test="${name}"]`);
  };

  it("expect Blind75 component is rendered without crashing", () => {
    const wrapper = setup();
  });

  it("expect component-Blind75 is rendered", () => {
    const wrapper = setup();
    const Blind75 = findJSXByAttr("component-Blind75", wrapper);
    expect(Blind75.length).toBe(1);
  });
});
