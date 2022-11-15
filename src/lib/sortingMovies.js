const sortingMovies = (movies) => {
  const sortedMovies = movies.sort((a, b) => {
    return new Date(b.dateAdded) - new Date(a.dateAdded);
  });

  return sortedMovies;
};

export default sortingMovies;
