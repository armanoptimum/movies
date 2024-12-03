import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/Header/index.jsx';
import Footer from '../components/Footer/index.jsx';
import PopularMovies from '../components/PopularMovies/index.jsx';
import Main from '../components/Main/index.jsx';
import MovieProvider from '../components/PopularMovies/utils/moviePrivider.jsx';

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
