import { shallow } from "enzyme";
import React from "react";
import Layout from "../components/Layout";

describe("Layout test", () => {
  const setup = (props = {}, state = null) => {
    return shallow(<Layout {...props} />);
  };

  const findJSXByAttr = (name, wrapper) => {
    return wrapper.find(`[data-test="${name}"]`);
  };

  it("expect Layout component is rendered without crashing", () => {
    const wrapper = setup();
  });

  it("expect component-layout is rendered", () => {
    const wrapper = setup();
    const layout = findJSXByAttr("component-app-layout", wrapper);
    expect(layout.length).toBe(1);
  });
});
