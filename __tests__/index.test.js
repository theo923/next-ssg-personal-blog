import { shallow, mount, render } from "enzyme";
import React from "react";
import App, { getStaticProps } from "../pages/index";

const mockSlug = [];

it("should getStaticProps be rendered && allow empty slugs", () => {
    const props = { slugs: mockSlug };
    const wrapper = shallow(<App {...props}></App>);
    expect(wrapper.find(getStaticProps)).toBeTruthy();
});
