import { URL } from '../global/url';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import { IPreviewMovieDTO } from '../models/MovieDTO';

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
    
  }),
});