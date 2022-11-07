import { RouterTypes } from '../models/RouterTypes';
import MainPage from "../pages/Public/MainPage";
import SetupMoviePage from "../pages/Admin/SetupMoviePage";
import AdminMoviesPage from '../pages/Admin/AdminMoviesPage';
import AdminCinemaPage from '../pages/Admin/AdminCinemaPage';
import MoviePage from '../pages/Public/MoviePage';
import CinemaHallsList from '../pages/Admin/CinemaHallsList';

export const publicRoutes: RouterTypes[] = [
  {path: '/main/movies', element: MainPage},
  {path: '/main/movie', element: MoviePage},
]

export const adminRoutes: RouterTypes[] = [
  {path: '/admin/movies', element: AdminMoviesPage},
  {path: '/admin/movie', element: SetupMoviePage},
  {path: '/admin/halls', element: CinemaHallsList},
  {path: '/admin/hall', element: AdminCinemaPage},
]