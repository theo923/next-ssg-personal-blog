import { shallow } from "enzyme";
import React from "react";
import AuthorSideBar from "../../components/Blog/AuthorSideBar";

describe("AuthorSideBar test", () => {
  const setup = (props = {}, state = null) => {
    return shallow(<AuthorSideBar {...props} />);
  };

  const findJSXByAttr = (name, wrapper) => {
    return wrapper.find(`[data-test="${name}"]`);
  };

  it("expect AuthorSideBar component is rendered without crashing", () => {
    const wrapper = setup();
  });

  it("expect component-authorSideBar is rendered", () => {
    const wrapper = setup();
    const authorSideBar = findJSXByAttr(
      "component-blog-authorSideBar",
      wrapper
    );
    expect(authorSideBar.length).toBe(1);
  });
});
