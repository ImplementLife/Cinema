import { URL } from '../global/url';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import { IMovieAdminTable, ITagDTO, ICreateMovieDTO } from '../models/MovieDTO';
import { ICinemaDTO } from '../models/CinemaDTO';

export const adminAPI = createApi({
  reducerPath: 'admin',
  baseQuery: fetchBaseQuery({baseUrl: URL}),
  tagTypes: ['movie', 'newTag'],
  endpoints: (build) => ({
    getAllMovies: build.query<IMovieAdminTable[], string> ({
      query: () => ({
        url: '/admin/movies',
      }),
      providesTags: () => ['movie']
    }),
    getAllHalls: build.query<ICinemaDTO[], string> ({
      query: () => ({
        url: '/admin/halls',
      })
    }),
    getAllTags: build.query<ITagDTO[], string> ({
      query: () => ({
        url: '/admin/tags',
      }),
      providesTags: () => ['newTag']
    }),
    getMovieToUpdate: build.query<ICreateMovieDTO, number>({
      query: (id) => ({
        url: `/admin/movie?id=${id}`,
        method: 'GET',
      })
    }),
    createMovie: build.mutation<string, FormData>({
      query: (body) => ({
        url: '/admin/movie',
        method: 'POST',
        body
      })
    }),
    updateMovie: build.mutation<string, FormData>({
      query: (body) => ({
        url: '/admin/movie',
        method: 'PUT',
        body
      })
    }),
    deleteMovie: build.mutation<null, number>({
      query: (id) => ({
        url: `/admin/movie?id=${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['movie']
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