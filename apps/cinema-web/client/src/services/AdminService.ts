import { URL } from '../global/url';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import { IMovieAdminTable, ITagDTO } from '../models/MovieDTO';

export const adminAPI = createApi({
  reducerPath: 'admin',
  baseQuery: fetchBaseQuery({baseUrl: URL}),
  tagTypes: ['createMovie', 'newTag'],
  endpoints: (build) => ({
    getAllMovies: build.query<IMovieAdminTable[], string> ({
      query: () => ({
        url: '/admin/movies',
      })
    }),
    getAllTags: build.query<ITagDTO[], string> ({
      query: () => ({
        url: '/admin/tags',
      }),
      providesTags: () => ['newTag']
    }),
    createMovie: build.mutation<string, FormData>({
      query: (body) => ({
        url: '/admin/createmovie',
        method: 'POST',
        body
      })
    }),
    createTag: build.mutation<string, ITagDTO>({
      query: (tag) => ({
        url: '/admin/tags',
        method: 'POST',
        body: tag
      }),
      invalidatesTags: ['newTag']
    }),
  }),
})