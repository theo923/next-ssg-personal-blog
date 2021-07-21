import { shallow } from 'enzyme';
import React from 'react';
import ContactItem from '../../components/About/ContactItem';

describe('ContactItem test', () => {

    const setup = (props={}, state=null) => {
        return shallow(<ContactItem {...props} />)
    }

    const findJSXByAttr = (name, wrapper) => {
        return wrapper.find(`[data-test="${name}"]`)
    }

    it("expect ContactItem component is rendered without crashing", () => {
        const wrapper = setup();   
    });

    it("expect component-contactItem is rendered", () => {
        const wrapper = setup();   
        const contactItem = findJSXByAttr("component-contactItem", wrapper)
        expect(contactItem.length).toBe(1);
    });
    
});




