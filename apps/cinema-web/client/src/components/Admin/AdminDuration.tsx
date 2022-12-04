import React, { FC } from 'react';
import { TextField } from '@mui/material';
import { useAppDispatch } from '../../hooks/redux';
import { createMovieSlice } from '../../redux-toolkit/reducers/createMovieSlice';
import { parseToMinute } from '../../global/utils/adminUtils';

interface IAdminDurationProps {
}

const AdminDuration: FC<IAdminDurationProps> = () => {
  const {setDuration} = createMovieSlice.actions
  const dispatch = useAppDispatch()

  const change = (event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,) => {
    dispatch(setDuration(parseToMinute(event.target.value)))
  }

  return (
    <TextField
        id="time"
        label="Тривалість"
        type="time"
        defaultValue="00:00"
        style={{width: '100%', maxWidth: 388}}
        onChange={change}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 600, // 5 min
        }}
    />
  );
};

export default AdminDuration;
