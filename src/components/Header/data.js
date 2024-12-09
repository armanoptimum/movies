import searchIcon from '@/assets/icons/search.svg';
import personIcon from '@/assets/icons/person.svg';
import addIcon from '@/assets/icons/add.svg';

export const itemsWithDropDown = [
  {
    href: 'media/movies',
    label: 'Movies',
    dropdownItems: [
      { name: 'Popular', href: 'popular' },
      { name: 'Now Playing', href: 'now-playing' },
      { name: 'Upcoming', href: 'upcoming' },
      { name: 'Top Rated', href: 'top-rated' },
    ],
  },
  {
    href: 'media/tv-shows',
    label: 'TV Shows',
    dropdownItems: [
      { name: 'Popular Show', href: 'popular' },
      { name: 'Airing Today', href: 'airing-today' },
      { name: 'On TV', href: 'on-tv' },
      { name: 'Top Rated', href: 'top-rated' },
    ],
  },
  {
    href: 'people',
    label: 'People',
    dropdownItems: [{ name: 'Popular People', href: 'popular' }],
  },
  {
    href: 'more',
    label: 'More',
    dropdownItems: [
      { name: 'Discussion', href: 'discussion' },
      { name: 'LeaderBoard', href: 'leaderboard' },
      { name: 'Support', href: 'support' },
      { name: 'API', href: 'api' },
    ],
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
