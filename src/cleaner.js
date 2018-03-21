const cleanMovieData = (movieData) => {
  return {
    text: movieData.opening_crawl,
    title: movieData.title,
    date: movieData.release_date,
    episode: movieData.episode_id
  };
};

export { cleanMovieData };