import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../Header/index.jsx';
import Footer from '../Footer/index.jsx';
import PopularMovies from '../PopularMovies/index.jsx';
import Main from '../Main/index.jsx';
import MovieProvider from '../PopularMovies/utils/moviePrivider.jsx';

function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/popular"
          element={
            <MovieProvider>
              <PopularMovies />
            </MovieProvider>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;
