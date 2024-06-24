import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Paths } from '@app/paths';
import { Main } from './pages/Main/Main';
import { Search } from './pages/search/Search';
import { Catalog } from './pages/catalog/Catalog';

const router = createBrowserRouter([
  {
    path: Paths.main,
    element: <Main />,
  },
  {
    path: Paths.search,
    element: <Search />,
  },
  {
    path: Paths.catalog,
    element: <Catalog />,
  },
]);

export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
