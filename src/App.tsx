import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Paths } from '@app/paths';
import { Main } from './pages/Main/Main';
import { Search } from './pages/search/Search';

const router = createBrowserRouter([
  {
    path: Paths.main,
    element: <Main />,
  },
  {
    path: Paths.search,
    element: <Search />,
  },
]);

export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
