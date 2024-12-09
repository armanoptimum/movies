import { createContext, useState } from 'react';
import { sortOptions } from '@/components/Options/Sort/data';
import { languageOptions } from '../Options/Filter/FilterOptions/Language/data';

export const MediaContex = createContext();

export default function MediaProvider({ children }) {
  const [activeSortOption, setActiveSortOption] = useState(sortOptions[0]);
  const [activeLanguageOption, setActiveLanguageOption] = useState(languageOptions[0]);
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [fromDate, setFromDate] = useState(null); 
  const [toDate, setToDate] = useState(null); 

  const contexValue = {
    activeSortOption,
    setActiveSortOption,
    page,
    setPage,
    movies,
    setMovies,
    activeLanguageOption,
    setActiveLanguageOption,
    selectedGenres,
    setSelectedGenres,
    setGenres,
    genres,
    fromDate,
    setFromDate,
    toDate,
    setToDate
  };
  return <MediaContex.Provider value={contexValue}>{children}</MediaContex.Provider>;
}
