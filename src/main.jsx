import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Accounting from './pages/Accounting.jsx';
import HumanResources from './pages/HumanResources.jsx';
import Legal from './pages/Legal.jsx';
import './index.css';
import Layout from './components/dashboard/Layout.jsx';
import Landing from './pages/Landing.jsx';
import SocialMedia from './pages/SocialMedia.jsx';
import NotFound from './pages/NotFound.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
  {
    path: '/dashboard',
    element: <Layout />,
    children: [
      { path: '', element: <Dashboard /> }, // Default dashboard overview
      { path: 'accounting', element: <Accounting /> },
      { path: 'human-resources', element: <HumanResources />, children:[
        { path: 'hr_overview', element: <h1>HR Overview</h1> },
        { path: 'payroll', element: <h1>Payroll</h1> },
        { path: 'employee-records', element: <h1>Employee Records</h1> },
        { path: 'performance-reviews', element: <h1>Performance Reviews</h1> },
      ] },
      { path: 'legal', element: <Legal /> },
      { path: 'social-media', element: <SocialMedia /> },
      { path: '*', element: <NotFound /> }, // Catch-all route for 404 page
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
