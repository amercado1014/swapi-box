import React from 'react';
import CardContainer from './CardContainer';
import { shallow } from 'enzyme';
import { mockCardContainerData } from '../../mockData';

describe('Card', () => {
  let wrapper;
  let mockSetFavorites;

  beforeEach(() => {
    mockSetFavorites = jest.fn();
    wrapper = shallow(<CardContainer cards={mockCardContainerData}
      setFavorites={mockSetFavorites} />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});