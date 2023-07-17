const sortingMovies = (movies) => {
  movies.sort((a, b) => {
    return new Date(b.dateAdded) - new Date(a.dateAdded);
  });

  return movies;
};

export default sortingMovies;
