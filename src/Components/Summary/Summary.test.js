import React from 'react';
import Summary from './Summary';
import { shallow } from 'enzyme';
import { mockSummaryData } from '../../mockData';

describe('Summary', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Summary film={mockSummaryData} />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});