/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from 'react';
import options from '../../Options/Option/data';

export const MovieContex = createContext();

export default function MovieProvider({ children }) {
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
  return <MovieContex.Provider value={contexValue}>{children}</MovieContex.Provider>;
}
