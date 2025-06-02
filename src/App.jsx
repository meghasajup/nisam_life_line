import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'sonner'; // Make sure this is installed and imported
import './App.css';
import { router } from './Router/Router.jsx';

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster
        position="bottom-center"
        theme="light"
        toastOptions={{
          style: {
            background: '#e0f7fa',
            color: '#004d40',
          },
          success: {
            style: {
              background: '#2e7d32',
              color: '#ffffff',
            },
          },
          error: {
            style: {
              background: '#c62828',
              color: '#ffffff',
            },
          },
        }}
      />
    </>
  );
}

export default App;
