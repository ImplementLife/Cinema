import { createTheme } from "@mui/material";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    mode: 'dark',
    secondary: {
      main: '#2b2b37',
      dark: '#252531',
    },
  },
});

export const styleForModal = {
  position: 'absolute' as 'absolute',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 400,
  width: '100%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

