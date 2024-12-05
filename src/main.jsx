import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import VerifyEmailPage from './components/VerifyEmailPage.jsx'
import { RouterProvider } from 'react-router'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'VerifyEmailPage',
    element:<VerifyEmailPage/>
    
 
  }
])

createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}></RouterProvider>
)
