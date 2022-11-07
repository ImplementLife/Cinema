import { Box } from '@mui/material';
import { FC } from 'react';
import { theme } from '../../../global/theme';

interface IAdminContainer {
  children: React.ReactElement| React.ReactNode;
}

const AdminContainer: FC<IAdminContainer> = ({children}) => {

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width:'100%',
        maxWidth: 'md',
        justifyContent:'space-between',
        [theme.breakpoints.down('sm')]: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
      }}
    >
      {children}
    </Box>
  );
};

export default AdminContainer;
