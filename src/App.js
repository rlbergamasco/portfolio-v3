import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, createTheme, ThemeProvider } from '@mui/material';
import { HomePage, GraphicsPage } from 'pages';
import { Footer } from 'components';

const ROUTES = [
  {
    label: 'Home',
    path: '/',
    element: <HomePage />,
  },
  {
    label: 'Graphics',
    path: '/graphics',
    element: <GraphicsPage />,
  },
];

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
      body1: {
        fontSize: '1.2rem',
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
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
