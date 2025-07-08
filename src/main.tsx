import { StrictMode } from 'react'
import "./App.css";
import { createRoot } from 'react-dom/client'
import Layout from './Layouts/Layout'
import NotFound from './pages/NotFoundPage'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router  = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children:[
      {
        index :true,
        element: <HomePage />
      },{
        path:'contact',
        element:<ContactPage />
      }
    ]
  },{
    path: '*',
    element: <NotFound />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
