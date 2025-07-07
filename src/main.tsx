import { StrictMode } from 'react'
import "./App.css";
import { createRoot } from 'react-dom/client'
import Layout from './Layouts/Layout'
import NotFound from './pages/NotFoundPage'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import BlogPage from './pages/BlogPage'
import Features from './pages/featuresPage'
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
        path:'services',
        element:<ServicesPage />
      },{
        path:'contact',
        element:<ContactPage />
      },{
        path:'features',
        element:<Features />
      },{
        path:'blog',
        element:<BlogPage />
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
