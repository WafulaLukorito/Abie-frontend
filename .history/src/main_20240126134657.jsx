import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//pages
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path: '/dashboard',
    element: <Dashboard/>
  },
  {
    path: '*',
    element: <div>404 Not Found</div>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)
