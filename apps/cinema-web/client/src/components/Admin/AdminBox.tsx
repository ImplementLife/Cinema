import { Box } from '@mui/material';
import * as React from 'react';

interface IAdminBoxProps {
  children: React.ReactElement| React.ReactNode;
}

const AdminBox: React.FunctionComponent<IAdminBoxProps> = ({children}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
      }}
    >
      {children}
    </Box>
  );
};

export default AdminBox;
