import React, { ChangeEvent, FC } from 'react';
import { Button } from '@mui/material';
import { useAppDispatch } from '../../hooks/redux';
import { createMovieSlice } from '../../redux-toolkit/reducers/createMovieSlice';

interface IAdminFileInputProps {
}

const AdminFileInput: FC<IAdminFileInputProps> = () => {
  const {setImage} = createMovieSlice.actions
  const dispatch = useAppDispatch()

  const choiseImage = (e: ChangeEvent<HTMLInputElement>) => {
    if ( e.target.files !== null) {
      dispatch(setImage(e.target.files[0]))
    }
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
