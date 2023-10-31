import React, { Component, useState, useEffect } from 'react';
import { Box, CircularProgress, useMediaQuery, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import { useGetMoviesQuery } from '../../services/TMDB';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';
// eslint-disable-next-line import/no-cycle
import { MovieList } from '..';

// class component
// eslint-disable-next-line react/prefer-stateless-function
// class Movies extends Component {
//   render() {
//     return (
//       <>
//         <h1>Movies</h1>
//         <h1>Featured</h1>
//       </>
//     );
//   }
// }

// functional component
const Movies = () => {
  const [page, setPage] = useState(1);
  const { genreIdOrCategoryName, searchQuery } = useSelector((state) => state.currentGenreOrCategory);
  const { data, error, isFetching } = useGetMoviesQuery({ genreIdOrCategoryName, page, searchQuery });

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (!data.results.length) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">
          No movies that match the name.
          <br />
          Please search for something else.
        </Typography>
      </Box>
    );
  }

  if (error) return 'Something went wrong, please try again';

  return (
    <div>
      <MovieList movies={data} />
    </div>
  );
};

export default Movies;
