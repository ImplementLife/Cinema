import { AppDispatch, RootState } from '../redux-toolkit';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector