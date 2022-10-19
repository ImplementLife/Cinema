import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICreateMovieDTO, ITagDTO } from '../../models/MovieDTO';

interface ICreateMovie {
  movie: ICreateMovieDTO;
  newTag: string;
}

const initialState: ICreateMovie = {
  movie: {
    name: '',
    description: '',
    trailerURL: '',
    movieDuration: 0,
    image: [],
    tags: [],
  },
  newTag: ''
};

export const createMovieSlice = createSlice({
  name: 'timeSlice',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.movie.name = action.payload;
    },
    setDesc: (state, action: PayloadAction<string>) => {
      state.movie.description = action.payload;
    },
    setDuration: (state, action: PayloadAction<number>) => {
      state.movie.movieDuration = action.payload;
    },
    setTrailer: (state, action: PayloadAction<string>) => {
      state.movie.trailerURL = action.payload;
    },
    setImage: (state, action: PayloadAction<string>) => {
      state.movie.image = [action.payload];
    },
    setIags: (state, action: PayloadAction<ITagDTO[]>) => {
      state.movie.tags = [...action.payload]
    },
    addNewTag: (state, action: PayloadAction<string>) =>{
      state.newTag = action.payload;
    }
  }
})

export default createMovieSlice.reducer;