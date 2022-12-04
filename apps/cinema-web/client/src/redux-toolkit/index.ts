import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { adminAPI } from '../services/AdminService';
import { movieAPI } from '../services/MovieService';
import tableSlice from './reducers/AdminTableSlice';
import createMovieSlice from './reducers/createMovieSlice';

const rootReducer = combineReducers({
  [movieAPI.reducerPath]: movieAPI.reducer,
  [adminAPI.reducerPath]: adminAPI.reducer,
  tableSlice,
  createMovieSlice,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware({
      serializableCheck: false
      })
      .concat(movieAPI.middleware)
      .concat(adminAPI.middleware)
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']