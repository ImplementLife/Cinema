import { Box, } from '@mui/material';
import React, { FC } from 'react';

interface IMainLyoutProps {
  children: React.ReactElement | React.ReactNode;
}

const MainLyout: FC<IMainLyoutProps> = ({children}) => {
  return (
    <Box sx={{
        width: 'auto',
        overflow: 'hidden',
      }}>
      {children}
    </Box>
  );
};

export default MainLyout;
