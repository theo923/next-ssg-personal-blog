import { shallow } from 'enzyme';
import React from 'react';
import ProjectInfo from '../components/Project/ProjectInfo';

describe('ProjectInfo test', () => {

    it("expect ProjectInfo component is rendered without crashing", () => {
        const wrapper = shallow(<ProjectInfo />);   
    });

    it("expect ProjectInfo component is rendered && match with the Snapshot", () => {
        const wrapper = shallow(<ProjectInfo />);   
        expect(shallow(<ProjectInfo />)).toMatchSnapshot();
    });
    
});




