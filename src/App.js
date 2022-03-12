import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Typography, createTheme } from '@mui/material';
import { HomePage, GraphicsPage } from 'pages';

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
      primary: {
        main: '#F96C5F',
      },
    },
    typography: {
    }
  });

  return (
    <Routes>
      {ROUTES.map((route) => (
        <Route
          key={route.path}
          exact={route.path === '/'}
          {...route}
        />
      ))}
    </Routes>
  );
}

export default App;
