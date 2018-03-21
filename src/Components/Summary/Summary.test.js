import React from 'react';
import Summary from './Summary';
import { shallow } from 'enzyme';

describe('Summary', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Summary />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });
});