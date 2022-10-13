import { RouterTypes } from '../models/RouterTypes';
import MainPage from "../pages/Public/MainPage";
import CreateMoviePage from "../pages/Admin/CraeteMoviePage";
import AdminPanel from '../pages/Admin/AdminPanel';

export const publicRoutes: RouterTypes[] = [
  {path: '/main', element: MainPage},
]

export const adminRoutes: RouterTypes[] = [
  {path: '/admin', element: AdminPanel},
  {path: '/admin/craete', element: CreateMoviePage},
]