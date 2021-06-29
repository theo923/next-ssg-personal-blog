
import { shallow } from 'enzyme';
import React from 'react';
import Navigation from '../components/Navigation';

describe('navigation test', () => {
    const handleClick = jest.fn()

    it("should rendert Navigation component", () => {
        expect(shallow(<Navigation />)).toMatchSnapshot();
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




