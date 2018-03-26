import React from 'react';
import CardContainer from './CardContainer';
import { shallow } from 'enzyme';
import { mockCardContainerData } from '../../mockData';

describe('Card', () => {
  let wrapper;
  let mockSetFavorites;

  beforeEach(() => {
    mockSetFavorites = jest.fn();
    wrapper = shallow(<CardContainer 
      cards={mockCardContainerData}
      setFavorites={mockSetFavorites} 
      favorites={mockCardContainerData} />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should match the snapshot with favorites and cards array', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot with empty favorites array', () => {
    wrapper = shallow(<CardContainer
      cards={mockCardContainerData}
      setFavorites={mockSetFavorites}
      favorites={[]} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot with empty favorites and cards array', () => {
    wrapper = shallow(<CardContainer
      cards={[]}
      setFavorites={mockSetFavorites}
      favorites={[]} />);
  });
});