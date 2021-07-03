import { shallow } from 'enzyme';
import React from 'react';
import CategoriesSideBar from '../components/Blog/CategoriesSideBar';

describe('CategoriesSideBar test', () => {

    it("expect CategoriesSideBar component is rendered without crashing", () => {
        const wrapper = shallow(<CategoriesSideBar />);   
    });

    it("expect CategoriesSideBar component is rendered && match with the Snapshot", () => {
        const wrapper = shallow(<CategoriesSideBar />);   
        expect(shallow(<CategoriesSideBar />)).toMatchSnapshot();
    });
    
});
