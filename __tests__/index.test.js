// import fs from 'fs';
// import Link from 'next/link'
import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Home, {getStaticProps} from '../pages';

const mockEmptyProps = async() => {}


it('test for home container', () => {
  expect(getStaticProps()).toEqual(mockEmptyProps());
});

