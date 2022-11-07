import React, { FC } from 'react';
import { TextField } from '@mui/material';

interface IAdminNameProps {
  label: string;
  setAction: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  value: string;
}

const AdminName: FC<IAdminNameProps> = ({label, setAction, value}) => {

  return (
    <TextField
      type="text"
      label={label}
      value={value}
      onChange={setAction}
      fullWidth
    />
  );
};

export default AdminName;
