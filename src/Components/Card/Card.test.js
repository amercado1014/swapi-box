import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';
import { mockCardData } from '../../mockData';

describe('Card', () => {
  let wrapper;
  let mockSetFavorites;

  beforeEach(() => {
    mockSetFavorites = jest.fn();
    wrapper = shallow(<Card card={mockCardData}
      setFavorites={mockSetFavorites} />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have the correct number of p tags for card data', () => {
    expect(wrapper.find('p').length).toEqual(4);
  });

  it('should invoke setFavorites with the correct params', () => {
    const favoritesButton = wrapper.find('button');
    favoritesButton.simulate('click');
    expect(mockSetFavorites).toHaveBeenCalledWith(mockCardData);
  });
});