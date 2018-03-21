const cleanMovieData = (movieData) => {
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
      homeworld: homeworldData.name,
      species: speciesData.name,
      population: homeworldData.population,
      language: speciesData.language
    };
  });
  return Promise.all(promises);
};

export { cleanMovieData, cleanPeopleData };