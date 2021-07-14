import { shallow } from 'enzyme';
import React from 'react';
import Navigation from '../components/Navigation';

describe('navigation test', () => {

    it("expect Navigation component is rendered without crashing", () => {
        const wrapper = shallow(<Navigation />);   
    });

    it("expect Navigation component is rendered", () => {
        const wrapper = shallow(<Navigation />);   
    });

    it("expect when rendered dropDownMenu should be closed", () => {
        const wrapper = shallow(<Navigation />);
        expect(wrapper.state()).toEqual({ dropDownMenu: false })
    });
    
    it("expect when clicked on the toggle menu button dropDownMenu should be expanded", () => {
        const wrapper = shallow(<Navigation />);
        wrapper.find('button').simulate('click')
        expect(wrapper.state()).toEqual({ dropDownMenu: true })
    });

    it("expect when clicked twice dropDownMenu should be closed", () => {
        const wrapper = shallow(<Navigation />);
        wrapper.find('button').simulate('click')
        expect(wrapper.state()).toEqual({ dropDownMenu: true })
    });

});




