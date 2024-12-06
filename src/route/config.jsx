import Main from '@/components/Main';
import PopularMovies from '@/components/Media/PopularMovies';
import MediaProvider from '../components/Media/moviePrivider';
import MediaLayout from '../components/Media';

const routeConfig = [
  {
    path: '/',
    element: <Main />,
  },
  {
    path: 'media',
    element: (
      <MediaProvider>
        <MediaLayout />
      </MediaProvider>
    ),
    children: [
      {
        path: 'movies/popular',
        element: <PopularMovies />,
      },
    ],
  },
];

export default routeConfig;
