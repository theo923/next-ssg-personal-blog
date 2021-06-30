import { shallow } from 'enzyme';
import React from 'react';
import CatergoriesSideBar from '../components/CatergoriesSideBar';

describe('CatergoriesSideBar test', () => {

    it("expect CatergoriesSideBar component is rendered without crashing", () => {
        const wrapper = shallow(<CatergoriesSideBar />);   
    });

    it("expect CatergoriesSideBar component is rendered && match with the Snapshot", () => {
        const wrapper = shallow(<CatergoriesSideBar />);   
        expect(shallow(<CatergoriesSideBar />)).toMatchSnapshot();
    });
    
});
