import { shallow } from "enzyme";
import React from "react";
import Cover from "../../components/About/Cover";

describe("Cover test", () => {
  const setup = (props = {}, state = null) => {
    return shallow(<Cover {...props} />);
  };

  const findJSXByAttr = (name, wrapper) => {
    return wrapper.find(`[data-test="${name}"]`);
  };

  it("expect Cover component is rendered without crashing", () => {
    const wrapper = setup();
  });

  it("expect component-cover is rendered", () => {
    const wrapper = setup();
    const cover = findJSXByAttr("component-cover", wrapper);
    expect(cover.length).toBe(1);
  });
});
