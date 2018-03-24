import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { 
  mockApiPeopleData,
  mockCleanPeopleData, 
  mockCleanFilmData,
  mockCardData 
} from '../../mockData';

describe('App', () => {
  let wrapper;
  let instance;
  
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockApiPeopleData)
      }));
    wrapper = shallow(<App />);
    instance = wrapper.instance();
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a default state', () => {
    expect(wrapper.state()).toEqual({
      film: {},
      cards: [],
      people: [],
      planets: [],
      vehicles: [],
      favorites: [],
      errorStatus: false
    });
  });

  it('should not fetch data on fetchApiData if state has data', () => {
    wrapper.setState({ people: mockCleanPeopleData });
    instance.fetchApiData('people', 'peopleData');
    expect(wrapper.state('cards')).toEqual(mockCleanPeopleData);
  });

  it('should fetch and update category in state on fetchApiData', async () => {
    await instance.fetchApiData('people', 'peopleData');
    expect(wrapper.state('people')).toEqual(mockCleanPeopleData);
  });

  it('should update state if an err is received on fetchApiData', async () => {
    window.fetch = jest.fn().mockImplementation(() => 
      Promise.reject({
        status: 500
      }));
    await instance.fetchApiData('people', 'peopleData');
    expect(wrapper.state('errorStatus')).toEqual(true);
  });

  it('calls setCardsArray with correct params on fetchApiData', async () => {
    instance.setCardsArray = jest.fn();
    await instance.fetchApiData('people', 'peopleData');
    expect(instance.setCardsArray).toHaveBeenCalledWith('people');
  });

  it('should update cards in state if category is not films', () => {
    wrapper.setState({ people: mockCleanPeopleData });
    instance.setCardsArray('people');
    expect(wrapper.state('cards')).toEqual(mockCleanPeopleData);
  });

  it('should not update cards in state if category is films', () => {
    wrapper.setState({ film: mockCleanFilmData });
    instance.setCardsArray('film');
    expect(wrapper.state('cards')).toEqual([]);
  });

  it('should add card to favorites on setFavoritesArray', () => {
    const card = mockCardData;
    instance.setFavoritesArray(card);
    expect(wrapper.state('favorites')).toEqual([card]);
  });

  it('should remove cards already in favorites on setFavoritesArray', () => {
    const card = mockCardData;
    instance.setFavoritesArray(card);
    instance.setFavoritesArray(card);
    expect(wrapper.state('favorites')).toEqual([]);
  });
});
