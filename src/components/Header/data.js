import searchIcon from '../../assets/search.svg';
import personIcon from '../../assets/person.svg';
import addIcon from '../../assets/add.svg';

export const itemsWithDropDown = [
  {
    href: 'popular',
    label: 'Movies',
    dropdownItems: ['Popular', 'Now Playing', 'Upcoming', 'Top Rated'],
  },
  {
    href: '#',
    label: 'TV Shows',
    dropdownItems: ['Popular Show', 'Airing Today', 'On TV', 'Top Rated'],
  },
  {
    href: '#',
    label: 'People',
    dropdownItems: ['Popular People'],
  },
  {
    href: '#',
    label: 'More',
    dropdownItems: ['Discussion', 'LeaderBoard', 'Support', 'API'],
  },
];

export const itemActions = [
  {
    label: null,
    source: addIcon,
  },
  {
    label: 'EN',
    source: null,
  },
  {
    label: 'Login',
    source: null,
  },
  {
    label: 'Join TMBD',
    source: null,
  },
  {
    label: null,
    source: personIcon,
  },
  {
    label: null,
    source: searchIcon,
  },
];
