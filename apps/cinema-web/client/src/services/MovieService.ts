import { URL } from '../global/url';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import { IPreviewMovieDTO, IMovieDTO } from '../models/MovieDTO';

export const movieAPI = createApi({
  reducerPath:'movieAPI',
  baseQuery: fetchBaseQuery({baseUrl: URL}),
  tagTypes: ['Movie'],
  endpoints: (build) => ({
    fetchPreviewMovie: build.query<IPreviewMovieDTO[], string> ({
      query: () => ({
        url: '/main/movies',
      })
    }),
    getMovie: build.query<IMovieDTO, string> ({
      query: (id) => ({
        url: `main/movie${id}`,
      })
    }),
    
  }),
});