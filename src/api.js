const root = 'https://swapi.co/api/';

const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const filmData = async () => {
  const ramdomNumber = Math.floor((Math.random() * 7) + 1);
  const filmData =  await fetchData(`${root}films/${ramdomNumber}`);
  return cleanFilmData(filmData);
};

const cleanFilmData = (filmData) => {
  const breakAt = new RegExp(/\s{3,}/, 'g');
  let text = filmData.opening_crawl.replace(breakAt, '###');
  text = text.split('###');

  return {
    text,
    title: filmData.title,
    date: filmData.release_date,
    episode: filmData.episode_id
  };
};

const peopleData = async () => {
  const peopleData = await fetchData(`${root}people`);
  return cleanPeopleData(peopleData.results);
};

const cleanPeopleData = (peopleDataArray) => {
  const promises = peopleDataArray.map(async person => {
    const { name, homeworld, species } = person;
    const homeworldData = await fetchData(homeworld);
    const speciesData = await fetchData(species);

    return {
      name: name,
      class: 'people-card',
      data: {
        homeworld: homeworldData.name,
        species: speciesData.name,
        population: homeworldData.population,
        language: speciesData.language
      }
    };
  });
  return Promise.all(promises);
};

const planetData = async () => {
  const planetData = await fetchData(`${root}planets`);
  return cleanPlanetData(planetData.results);
};

const cleanPlanetData = (planetsDataArrray) => {
  const promises = planetsDataArrray.map(async planet => {
    const { name, terrain, population, climate, residents } = planet;
    const namesOfResidents = await cleanPlanetResidentsData(residents);

    return {
      name: name,
      class: 'planet-card',
      data: {
        terrain,
        population,
        climate,
        residents: namesOfResidents.join(',\n') || 'none'
      }
    };
  });
  return Promise.all(promises);
};

const cleanPlanetResidentsData = (residentsDataArray) => {
  const promises = residentsDataArray.map(async resident => {
    const residentData = await fetchData(resident);
    return residentData.name;
  });
  return Promise.all(promises);
};

const vehicleData = async () => {
  const vehicleData = await fetchData(`${root}vehicles`);
  return cleanVehicleData(vehicleData.results);
};

const cleanVehicleData = (vehiclesDataArrray) => {
  const promises = vehiclesDataArrray.map(async vehicle => {
    //eslint-disable-next-line
    const { name, model, vehicle_class, passengers } = vehicle;

    return {
      name,
      class: 'vehicle-card',
      data: {
        model,
        //eslint-disable-next-line
        class: vehicle_class,
        passengers
      }
    };
  });
  return Promise.all(promises);
};

export default {
  fetchData, 
  filmData, 
  peopleData, 
  planetData, 
  vehicleData 
};