import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Router.jsx';
import './App.css';

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
