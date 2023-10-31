import { createSlice } from '@reduxjs/toolkit';

export const genreOrCategorySlice = createSlice({
  name: 'genreOrCategory',
  initialState: {
    genreIdOrCategoryName: '',
    page: 1,
    searchQuery: '',
  },
  reducers: {
    selectGenreOrCategory: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.genreIdOrCategoryName = action.payload;
      // eslint-disable-next-line no-param-reassign
      state.searchQuery = '';
    },
    searchMovie: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.searchQuery = action.payload;
    },
  },
});

export const { selectGenreOrCategory, searchMovie } = genreOrCategorySlice.actions;
export default genreOrCategorySlice.reducer;
