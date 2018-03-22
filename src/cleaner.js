const cleanFilmData = (movieData) => {
  return {
    text: movieData.opening_crawl,
    title: movieData.title,
    date: movieData.release_date,
    episode: movieData.episode_id
  };
};

const cleanPeopleData = (peopleDataArray) => {
  const promises = peopleDataArray.map(async person => {
    const { name, homeworld, species } = person;

    const homeworldResponse = await fetch(homeworld);
    const homeworldData = await homeworldResponse.json();

    const speciesResponse = await fetch(species);
    const speciesData = await speciesResponse.json();

    return {
      name: name,
      class: 'people-card',
      data : {
        homeworld: homeworldData.name,
        species: speciesData.name,
        population: homeworldData.population,
        language: speciesData.language
      }
    };
  });
  return Promise.all(promises);
};

const cleanPlanetData = (planetsDataArrray) => {
  const promises = planetsDataArrray.map(async planet => {
    const { name, terrain, population, climate, residents } = planet;
    const  namesOfResidents= await cleanPlanetResidentsData(residents);

    return {
      name: name,
      class: 'planet-card',
      data: {
        terrain,
        population,
        climate,
        residents: namesOfResidents.join() || 'none'
      }
    };
  });
  return Promise.all(promises);
};

const cleanPlanetResidentsData = (residentsDataArray) => {
  const promises = residentsDataArray.map( async resident => {
    const residentResponse = await fetch(resident);
    const residentData = await residentResponse.json();
    return residentData.name;
  });
  return Promise.all(promises);
};

const cleanVehicleData = (vehiclesDataArrray) => {
  const promises = vehiclesDataArrray.map( async vehicle => {
    const { name, model, vehicle_class, passengers } = vehicle;
    
    return {
      name,
      class: 'vehicle-card',
      data: {
        model,
        class: vehicle_class,
        passengers
      }
    };
  });
  return Promise.all(promises);
};

export { 
  cleanFilmData, 
  cleanPeopleData, 
  cleanPlanetData,
  cleanVehicleData 
};