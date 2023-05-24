import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './pages/root/Root.tsx';
import Test from './pages/test/Test.tsx';
import { ParallaxContext } from 'react-scroll-parallax';

const browser = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [{ path: 'test', element: <Test /> }],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={browser} />
  </React.StrictMode>
);
