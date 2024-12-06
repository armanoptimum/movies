import Main from '@/components/Main';
import MediaProvider from '../components/Media/moviePrivider';
import MediaLayout from '../components/Media';
import MovieCategory from '../components/Media/MovieCategory';

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
        path: 'movies/:category',
        element: <MovieCategory />,
      },
    ],
  },
];

export default routeConfig;
