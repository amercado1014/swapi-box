import Swapi from './api';
import { 
  mockApiVehicleData, 
  mockCleanVehicleData,
  mockApiFilmData,
  mockCleanFilmData,
  mockApiPeopleData,
  mockCleanPeopleData,
  mockApiPlanetData,
  mockCleanPlanetData
} from './mockData';

describe('fetch data', () => {
  let url;

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockApiFilmData)
      }));
    url = 'https://swapi.co/api/films/1';
  });

  it('calls fetch with the correct params', () => {
    Swapi.fetchData(url);
    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('returns fetched data', async () => {
    await expect(Swapi.fetchData(url)).resolves.toEqual(mockApiFilmData);
  });
});

describe('clean data', () => {

  it('should clean film data', async () => {
    window.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockApiFilmData)
      }));
    const returnedValue = await Swapi.filmData();
    expect(returnedValue).toEqual(mockCleanFilmData);
  });

  it('should clean people data', async () => {
    window.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockApiPeopleData)
      }));
    const returnedValue = await Swapi.peopleData();
    expect(returnedValue).toEqual(mockCleanPeopleData);
  });

  it('should clean planet data', async () => {
    window.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockApiPlanetData)
      }));
    const returnedValue = await Swapi.planetData();
    expect(returnedValue).toEqual(mockCleanPlanetData);
  });
  
  it('should clean vehicle data', async () => {
    window.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockApiVehicleData)
      })); 
    const returnedValue = await Swapi.vehicleData();
    expect(returnedValue).toEqual(mockCleanVehicleData);
  });
});