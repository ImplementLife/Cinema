import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { adminAPI } from '../services/AdminService';
import { movieAPI } from '../services/MovieService';
import pageSlice from './reducers/AdminPageSlice';
import createMovieSlice from './reducers/createMovieSlice';

const rootReducer = combineReducers({
  [movieAPI.reducerPath]: movieAPI.reducer,
  [adminAPI.reducerPath]: adminAPI.reducer,
  pageSlice,
  createMovieSlice,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware()
      .concat(movieAPI.middleware)
      .concat(adminAPI.middleware)
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']