import Main from '../components/Main';
import PopularMovies from '../components/PopularMovies';
import MovieProvider from '../components/PopularMovies/moviePrivider';

 const routeConfig = [
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/popular',
    element: (
      <MovieProvider>
        <PopularMovies />
      </MovieProvider>
    ),
  },
];

export default routeConfig;