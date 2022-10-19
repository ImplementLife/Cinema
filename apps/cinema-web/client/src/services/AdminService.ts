import { URL } from '../global/url';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import { ICreateMovieDTO, IMovieAdminTable, ITagDTO } from '../models/MovieDTO';

export const adminAPI = createApi({
  reducerPath: 'admin',
  baseQuery: fetchBaseQuery({baseUrl: URL}),
  tagTypes: ['createMovie', 'newTag'],
  endpoints: (build) => ({
    getAllMovies: build.query<IMovieAdminTable[] | undefined, string> ({
      query: () => ({
        url: '/admin/movies/',
      })
    }),
    getAllTags: build.query<ITagDTO[], string> ({
      query: () => ({
        url: '/admin/movies/tags',
      }),
      providesTags: () => ['newTag']
    }),
    createMovie: build.mutation<string, ICreateMovieDTO>({
      query: (body) => ({
        url: '/admin/movies',
        method: 'POST',
        body
      })
    }),
    sendImage: build.mutation<string, string[]>({
      query: (body) => ({
        url: '/admin/movies/image',
        method: 'POST',
        body
      })
    }),
    createTag: build.mutation<null, string>({
      query: (body) => ({
        url: '/admin/movies/tags',
        method: 'POST',
        body
      }),
      invalidatesTags: ['newTag']
    }),
  }),
})