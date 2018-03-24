import React from 'react';
import Nav from './Nav';
import { shallow } from 'enzyme';

describe('Nav', () => {
  let wrapper;
  let mockFetchCards;
  let mockDisplayFavorites;
  let mockFavorites;


  beforeEach(() => {
    mockFetchCards = jest.fn();
    mockDisplayFavorites = jest.fn();
    mockFavorites = [
      {
        name: "Luke Skywalker",
        class: "people-card",
        data: {
          homeworld: "Tatooine",
          language: "Galactic Basic",
          population: "200000",
          species: "Human"
        }
      }
    ];
    wrapper = shallow(<Nav fetchCards={mockFetchCards}
      favorites={mockFavorites}
      displayFavorites={mockDisplayFavorites} />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should display the length of favorites array', () => {
    expect(wrapper.find('span').text()).toEqual('1');
  });

  it('should invoke fetchCards with the right params for people', () => {
    const peopleButton = wrapper.find('.people-button');
    peopleButton.simulate('click');
    expect(mockFetchCards).toHaveBeenCalledWith('people', 'peopleData');
  });

  it('should invoke fetchCards with the right params for planets', () => {
    const planetsButton = wrapper.find('.planets-button');
    planetsButton.simulate('click');
    expect(mockFetchCards).toHaveBeenCalledWith('planets', 'planetData');
  });

  it('should invoke fetchCards with the right params for vehicles', () => {
    const vehiclesButton = wrapper.find('.vehicles-button');
    vehiclesButton.simulate('click');
    expect(mockFetchCards).toHaveBeenCalledWith('vehicles', 'vehicleData');
  });

  it('should invoke displayFavorites with the right params', () => {
    const favoritesButton = wrapper.find('.favorites-button');
    favoritesButton.simulate('click');
    expect(mockDisplayFavorites).toHaveBeenCalledWith('favorites');
  });
});