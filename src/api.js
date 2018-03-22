import { 
  cleanFilmData, 
  cleanPeopleData, 
  cleanPlanetData, 
  cleanVehicleData 
} from './cleaner.js';

const root = 'https://swapi.co/api/';

const filmData = async () => {
  const ramdomNumber = Math.floor((Math.random() * 7) + 1);
  const response = await fetch(`${root}films/${ramdomNumber}`);
  const data =  await response.json();
  return cleanFilmData(data);
};

const peopleData = async () => {
  const response = await fetch(`${root}people`);
  const data = await response.json();
  return cleanPeopleData(data.results);
};

const planetData = async () => {
  const response = await fetch(`${root}planets`);
  const data = await response.json();
  return cleanPlanetData(data.results);
};

const vehicleData = async () => {
  const response = await fetch(`${root}vehicles`);
  const data = await response.json();
  return cleanVehicleData(data.results);
};

export default { 
  filmData, 
  peopleData, 
  planetData, 
  vehicleData 
};