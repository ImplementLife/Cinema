import { Box, Container } from '@mui/material';
import React, { FC } from 'react';

interface IAdminLyoutProps {
  children: React.ReactElement | React.ReactNode;
}

const AdminLyout: FC<IAdminLyoutProps> = ({children}) => {
  return (
    <Container>
      <Box sx={{
          backgroundColor: 'secondary.dark',
          padding: '10px',
          borderRadius: '10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
        {children}
      </Box>
    </Container>
  );
};

export default AdminLyout;
