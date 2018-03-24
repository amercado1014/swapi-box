import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
