
import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Navigation, {handleClick} from '../components/Navigation';

describe('navigation test', () => {

    it("should call setState with initial values on component mount", () => {
        const mockSetState = jest.spyOn(React, "useState");
    
        const wrapper = shallow(<Navigation />);
    
        expect(mockSetState).toHaveBeenCalledTimes(1);
    });

});




