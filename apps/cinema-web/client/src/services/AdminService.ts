import { URL } from './global/values';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import { IMovieDTO } from '../models/MovieDTO';

export const adminAPI = createApi({
  reducerPath: 'admin',
  baseQuery: fetchBaseQuery({baseUrl: URL}),
  tagTypes: ['createMovie'],
  endpoints: (build) => ({
    getAllMovies: build.query<IMovieDTO[], string> ({
      query: () => ({
        url: '/admin/movies/',
      })
    }),
  }),
})