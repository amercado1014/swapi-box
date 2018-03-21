import React from 'react';
import Nav from './Nav';
import { shallow } from 'enzyme';

describe('Card', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Nav />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });
});