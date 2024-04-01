import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import routers from './routers.tsx'
import App from './App.tsx'
import "./App.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
<RouterProvider router={routers} />,
)


