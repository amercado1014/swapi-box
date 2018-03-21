import React from 'react';
import CardContainer from './CardContainer';
import { shallow } from 'enzyme';

describe('Card', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CardContainer />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });
});