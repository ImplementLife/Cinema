import React, { FC } from 'react';
import { Button } from '@mui/material';
import { useAppDispatch } from '../../hooks/redux';
import { createMovieSlice } from '../../redux-toolkit/reducers/createMovieSlice';

interface IAdminFileInputProps {
}

const AdminFileInput: FC<IAdminFileInputProps> = () => {

  const {setImage} = createMovieSlice.actions
  const dispatch = useAppDispatch()

  const choiseImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setImage(e.target.value))
  }

  return (
    <>
    <Button
      variant="contained"
      component="label"
    >
      Upload File
      <input
        type="file"
        onChange={choiseImage}
        hidden
      />
    </Button>
    </>

  );
};

export default AdminFileInput;
