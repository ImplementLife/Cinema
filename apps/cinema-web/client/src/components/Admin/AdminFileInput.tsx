import React, { ChangeEvent, FC } from 'react';
import { Box, Button } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { createMovieSlice } from '../../redux-toolkit/reducers/createMovieSlice';

interface IAdminFileInputProps {
}

const AdminFileInput: FC<IAdminFileInputProps> = () => {
  const {setImage} = createMovieSlice.actions
  const dispatch = useAppDispatch()
  const imageFile = useAppSelector(state => state.createMovieSlice.movie.imageFile)

  const choiseImage = (e: ChangeEvent<HTMLInputElement>) => {
    if ( e.target.files !== null) {
      dispatch(setImage(e.target.files[0]))
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <Box
        sx={{
          border: '1px solid',
          borderRadius: '5px 0px 0px 5px',
          padding: '10px',
          color: '#ffffff80',
          width: 'calc(100% - 116.09)',
        }}
      >
        {imageFile?.name ?? "Upload File"}
      </Box>
      <Button
        sx={{
          borderRadius: '0px 5px 5px 0px',
        }}
        variant="contained"
        component="label"
      >
        Choise File
        <input
          type="file"
          onChange={choiseImage}
          hidden
        />
      </Button>
    </Box>
  );
};

export default AdminFileInput;
