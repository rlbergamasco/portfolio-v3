import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, createTheme, ThemeProvider } from '@mui/material';

import { ROUTES } from 'utils/routes';

function App() {
  const theme = createTheme({
    palette: {
      text: {
        primary: "#FFFFFF",
        secondary: "#000000"
      }
    },
    typography: {
      fontFamily: [
        'Lato',
        'Roboto',
        'Helvetica',
        'Arial',
        'sans-serif'
      ].join(','),
      h1: {
        fontFamily: [
          'Montserrat',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif'
        ].join(','),
        fontWeight: 700,
        fontSize: '4.2rem',
        '@media (max-width: 800px)': {
          fontSize: '3.6rem',
        },
        '@media (max-width: 500px)': {
          fontSize: '2.4rem',
        },
      },
      h2: {
        fontFamily: [
          'Montserrat',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif'
        ].join(','),
        fontWeight: 700,
        fontSize: '2.2rem',
        '@media (max-width: 800px)': {
          fontSize: '1.8rem',
        },
        '@media (max-width: 500px)': {
          fontSize: '1.7rem',
        },
      },
      h3: {
        fontFamily: [
          'Montserrat',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif'
        ].join(','),
        fontWeight: 500,
        fontSize: '1.5rem',
      },
      h4: {
        fontFamily: [
          'Montserrat',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif'
        ].join(','),
        fontWeight: 700,
        fontSize: '1.5rem',
      },
      h5: {
        fontFamily: [
          'Montserrat',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif'
        ].join(','),
        fontWeight: 700,
        fontSize: '1.2rem',
      },
      body1: {
        fontSize: '1.1rem',
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHieght: "100vh", width: "100vw", backgroundColor: "#1C1C1C" }}>
        <Routes>
          {ROUTES.map((route) => (
            <Route
              key={route.path}
              exact={route.path === '/'}
              {...route}
            />
          ))}
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;