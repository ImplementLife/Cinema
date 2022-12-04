import React, { FC } from 'react';
import { TextField } from '@mui/material';

interface IAdminNameProps {
  label: string;
  setAction: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const AdminName: FC<IAdminNameProps> = ({label, setAction}) => {

  return (
    <TextField
      type="text"
      label={label}
      onChange={setAction}
      fullWidth
    />
  );
};

export default AdminName;
