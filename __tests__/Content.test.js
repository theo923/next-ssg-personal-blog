import { shallow } from "enzyme";
import React from "react";
import Content from "../components/Content";

describe("Content test", () => {
  const setup = (props = {}, state = null) => {
    return shallow(<Content {...props} />);
  };

  const findJSXByAttr = (name, wrapper) => {
    return wrapper.find(`[data-test="${name}"]`);
  };

  it("expect Content component is rendered without crashing", () => {
    const wrapper = setup();
  });

  it("expect component-app-content is rendered", () => {
    const wrapper = setup();
    const content = findJSXByAttr("component-app-content", wrapper);
    expect(content.length).toBe(1);
  });
});
