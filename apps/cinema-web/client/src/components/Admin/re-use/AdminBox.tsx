import { Box } from '@mui/material';
import { FC } from 'react';

interface IAdminBox {
  children: React.ReactElement| React.ReactNode;
}

const AdminBox: FC<IAdminBox> = ({children}) => {

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        padding: 1,
        '& > :not(style)': { m: 1 },
      }}
    >
      {children}
    </Box>
  );
};

export default AdminBox;