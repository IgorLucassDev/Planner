import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';


import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

// Route components
import Login from './routes/login/Login.jsx';
import Account from './routes/account/Account.jsx';


const router = createBrowserRouter([

  {
    path: '/',
    element: <Login />
  },

  {
  path: 'app',
  element: <App/>,
  children: [
    {
      path: 'account',
      element: <Account/>
    }
  ]
},

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
