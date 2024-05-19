import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Main } from './pages/Main/Main';
import { Search } from './pages/search/Search';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/search' element={<Search />} />
          {/* <Route path='/catalog' element={<Catalog />} />
          <Route path='/:id' element={<FullAnime />} /> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
