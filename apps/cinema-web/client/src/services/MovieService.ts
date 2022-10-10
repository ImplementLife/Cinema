import { URL } from './global/values';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import { PreviewMovieTypes } from '../models/PreviewMovieTypes';

export const movieAPI = createApi({
  reducerPath:'movieAPI',
  baseQuery: fetchBaseQuery({baseUrl: URL}),
  tagTypes: ['Movie'],
  endpoints: (build) => ({
    fetchPreviewMovie: build.query<PreviewMovieTypes[], string> ({
      query: () => ({
        url: '/main/movies',
      })
    }),
    fetchPreviewImg: build.query<string, string>({
      query: (image: string) => ({
        url: `/resources/images/${image}`,
      })
    })
  }),
});