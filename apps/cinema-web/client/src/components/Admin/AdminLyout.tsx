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
        }}>
        {children}
      </Box>
    </Container>
  );
};

export default AdminLyout;
