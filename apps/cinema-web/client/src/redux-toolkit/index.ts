import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { movieAPI } from '../services/MovieService';
import pageSlice from './reducers/AdminTableSlice';

const rootReducer = combineReducers({
  [movieAPI.reducerPath]: movieAPI.reducer,
  pageSlice
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware().concat(movieAPI.middleware)
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']