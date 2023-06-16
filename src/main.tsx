import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './pages/root/Root.tsx';
import Blog from './pages/blog/Blog.tsx';

const browser = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [{ path: 'test', element: <div>test</div> }],
  },
  {
    path: '/blog',
    element: <Blog />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={browser} />
  </React.StrictMode>
);
