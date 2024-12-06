import { createContext, useState } from 'react';
import options from '@/components/Options/Option/data';

export const MediaContex = createContext();

export default function MediaProvider({ children }) {
  const [activeSortOption, setActiveSortOption] = useState(options[0]);
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  const contexValue = {
    activeSortOption,
    setActiveSortOption,
    page,
    setPage,
    movies,
    setMovies,
  };
  return <MediaContex.Provider value={contexValue}>{children}</MediaContex.Provider>;
}
