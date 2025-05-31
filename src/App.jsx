// import React from 'react'
// export default function App() {
//   return (
//     <h1 className="text-3xl font-bold underline">
//       Hello world!
//     </h1>
//   )
// }

import React from 'react'
import { RouterProvider } from 'react-router-dom'

import './App.css'
import { router } from './Router/Router.jsx'

function App() {
  return <RouterProvider router={router} />
}

export default App
