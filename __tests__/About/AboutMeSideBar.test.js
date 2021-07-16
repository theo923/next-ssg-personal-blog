import { shallow } from 'enzyme';
import React from 'react';
import AboutMeSideBar from '../../components/About/AboutMeSideBar';

describe('AboutMeSideBar test', () => {

    const setup = (props={}, state=null) => {
        return shallow(<AboutMeSideBar {...props} />)
    }

    const findJSXByAttr = (name, wrapper) => {
        return wrapper.find(`[data-test="${name}"]`)
    }

    it("expect AboutMeSideBar component is rendered without crashing", () => {
        const wrapper = setup();   
    });

    it("expect component-aboutMeSideBar is rendered", () => {
        const wrapper = setup();   
        const aboutMeSideBar = findJSXByAttr("component-aboutMeSideBar", wrapper)
        expect(aboutMeSideBar.length).toBe(1);
    });
    
});




