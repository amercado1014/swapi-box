import { 
  cleanMovieData, 
  cleanPeopleData, 
  cleanPlanetData, 
  cleanVehicleData 
} from './cleaner.js';

const root = 'https://swapi.co/api/';

const getMovieData = async () => {
  try {
    const ramdomNumber = Math.floor((Math.random() * 7) + 1);
    const response = await fetch(`${root}films/${ramdomNumber}`);
    const data =  await response.json();
    return cleanMovieData(data);
  } catch (error) {
    console.log('Error: ', error);
  }
};

const getPeopleData = async () => {
  try {
    const response = await fetch(`${root}people`);
    const data = await response.json();
    return cleanPeopleData(data.results);
  } catch (error) {
    console.log('Error: ', error);
  }
};

const getPlanetData = async () => {
  try {
    const response = await fetch(`${root}planets`);
    const data = await response.json();
    return cleanPlanetData(data.results);
  } catch (error) {
    console.log('Error: ', error);
  }
};

const getVehicleData = async () => {
  try {
    const response = await fetch(`${root}vehicles`);
    const data = await response.json();
    return cleanVehicleData(data.results);
  } catch (error) {
    console.log('Error: ', error);
  }
};

export { 
  getMovieData, 
  getPeopleData, 
  getPlanetData, 
  getVehicleData 
};