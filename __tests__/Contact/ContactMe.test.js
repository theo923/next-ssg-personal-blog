import { shallow } from "enzyme";
import React from "react";
import ContactMe from "../../components/Contact/ContactMe";

describe("ContactMe test", () => {
    const setup = (props = {}, state = null) => {
        return shallow(<ContactMe {...props} />);
    };

    const findJSXByAttr = (name, wrapper) => {
        return wrapper.find(`[data-test="${name}"]`);
    };

    it("expect ContactMe component is rendered without crashing", () => {
        const wrapper = setup();
    });

    it("expect component-contact is rendered", () => {
        const wrapper = setup();
        const contact = findJSXByAttr("component-contact", wrapper);
        expect(contact.length).toBe(1);
    });
});
