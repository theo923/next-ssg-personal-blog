import { shallow } from 'enzyme';
import React from 'react';
import LangNHobbies from '../../components/About/LangNHobbies';

describe('LangNHobbies test', () => {

    const setup = (props={}, state=null) => {
        return shallow(<LangNHobbies {...props} />)
    }

    const findJSXByAttr = (name, wrapper) => {
        return wrapper.find(`[data-test="${name}"]`)
    }

    it("expect LangNHobbies component is rendered without crashing", () => {
        const wrapper = setup();   
    });

    it("expect component-langNHobbies is rendered", () => {
        const wrapper = setup();   
        const langNHobbies = findJSXByAttr("component-langNHobbies", wrapper)
        expect(langNHobbies.length).toBe(1);
    });
    
});




