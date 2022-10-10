import MainPage from "../pages/Public/MainPage";
import { RouterTypes } from '../models/RouterTypes';

export const publicRoutes: RouterTypes[] = [
  {path: '/main', element: MainPage, exact: true},
]