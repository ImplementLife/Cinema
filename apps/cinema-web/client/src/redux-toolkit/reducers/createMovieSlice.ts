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
    duration: 0,
    imageName: '',
    imageFile: null,
    tags: [],
  },
  newTag: '',
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
      state.movie.duration = action.payload;
    },
    setTrailer: (state, action: PayloadAction<string>) => {
      state.movie.trailerURL = action.payload;
    },
    setImage: (state, action: PayloadAction<File>) => {
      state.movie.imageFile = action.payload;
    },
    setTags: (state, action: PayloadAction<ITagDTO[]>) => {
      state.movie.tags = [...action.payload]
    },
    addNewTag: (state, action: PayloadAction<string>) =>{
      state.newTag = action.payload;
    }
  }
})

export default createMovieSlice.reducer;