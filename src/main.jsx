import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'

import Layout from './components/Layout';
import Index, { loader as clientLoader } from './pages/Index';
import NewClient, { action as newClientAction } from './pages/NewClient';
import ErrorPage from './components/ErrorPage';
import EditClient, { loader as updateClientLoader, action as updateClientAction } from './pages/UpdateClient';
import { action as destroyClient } from './components/Client';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clientLoader,
        errorElement: <ErrorPage />
      },
      {
        path: '/clients/new',
        element: <NewClient />,
        action: newClientAction,
        errorElement: <ErrorPage />
      },
      {
        path: '/clients/:id/edit',
        element: <EditClient />,
        loader: updateClientLoader,
        action: updateClientAction,
        errorElement: <ErrorPage />
      },
      {
        path: '/clients/:id/destroy',
        action: destroyClient,
        errorElement: <ErrorPage />
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
