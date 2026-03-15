import { createBrowserRouter, redirect } from 'react-router';

export const router = createBrowserRouter([
  {
    path: '/',
    lazy: () => import('../routes/protected/layout'),
    children: [
      { index: true, loader: () => redirect('/home') },
      {
        path: 'home',
        lazy: () => import('../routes/protected/home'),
      },
    ],
  },
]);
