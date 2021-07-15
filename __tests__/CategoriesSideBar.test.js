import { shallow } from 'enzyme';
import React from 'react';
import CategoriesSideBar from '../components/Blog/CategoriesSideBar';

describe('CategoriesSideBar test', () => {
    const setup = (props={}, state=null) => {
        return shallow(<CategoriesSideBar {...props} />)
    }

    const findJSXByAttr = (name, wrapper) => {
        return wrapper.find(`[data-test="${name}"]`)
    }

    it("expect CategoriesSideBar component is rendered without crashing", () => {
        const wrapper = setup();   
    });

    it("expect component-blog-categoriesSideBar is rendered", () => {
        const wrapper = setup();   
        const categoriesSideBar = findJSXByAttr("component-blog-categoriesSideBar", wrapper)
        expect(categoriesSideBar.length).toBe(1);
    });
    
});