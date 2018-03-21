import { cleanMovieData } from './cleaner.js';

const root = 'https://swapi.co/api/';

const getMovieData = async () => {
  try {
    const ramdomNumber = Math.floor((Math.random() * 7) + 1);
    const response = await fetch(`${root}films/${ramdomNumber}`);
    const data =  await response.json();
    return cleanMovieData(data);
  } catch(error) {
    console.log('Error: ', error);
  }
};

export { getMovieData };