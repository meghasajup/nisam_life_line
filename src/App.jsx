import React from 'react';
// import { RouterProvider } from 'react-router-dom';
// import { router } from './Router/Router.jsx';
import { Toaster } from 'sonner';
import './App.css';

function App() {
  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
        <div className="text-center animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 animate-bounce">
            🚧 Under Construction 🚧
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            We're working hard to launch something amazing. Stay tuned!
          </p>
          <div className="flex justify-center">
            <span className="relative flex h-5 w-5 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-5 w-5 bg-yellow-500"></span>
            </span>
            <span className="text-gray-700 font-medium">Loading magic...</span>
            <br />
           <span className="text-gray-700 font-medium">
      Any enquiry? <a href="mailto:techistasolutions@gmail.com" className="text-blue-600 underline hover:text-blue-800">techistasolutions@gmail.com</a>
    </span>
          </div>
        </div>
      </div>

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
