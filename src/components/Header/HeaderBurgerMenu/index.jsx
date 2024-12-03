import { useState } from 'react';
import HeaderNavItem from '../HeaderNavItem';
import BurgerMenuWrapper from './styles';

export default function BurgerMenu({ burgerActive }) {
  const [activeDropdowns, setActiveDropdowns] = useState([]);

  function toggleDropdown(index) {
    setActiveDropdowns((prev) => {
      if (prev.includes(index)) {
        return prev.filter((item) => item !== index);
      } else {
        return [...prev, index];
      }
    });
  }
  return (
    <BurgerMenuWrapper $show={burgerActive ? 'show' : ''}>
      <ul>
        <HeaderNavItem
          onClick={() => toggleDropdown(0)}
          isActiveDropDown={activeDropdowns.includes(0)}
          href="popular"
          dropdownItems={['Popular', 'Now Playing', 'Upcoming', 'Top Rated']}
        >
          Movies
        </HeaderNavItem>
        <HeaderNavItem
          onClick={() => toggleDropdown(1)}
          isActiveDropDown={activeDropdowns.includes(1)}
          dropdownItems={['Popular Show', 'Airing Today', 'On TV', 'Top Rated']}
        >
          TV Shows
        </HeaderNavItem>
        <HeaderNavItem
          onClick={() => toggleDropdown(2)}
          isActiveDropDown={activeDropdowns.includes(2)}
          dropdownItems={['Popular People']}
        >
          People
        </HeaderNavItem>
      </ul>
      <div className="other">
        <p>Contribution Bible</p>
        <p>Discussion</p>
        <p>Leaderboard</p>
        <p>API</p>
        <p>Support</p>
        <p>About</p>
        <p>Logout</p>
      </div>
    </BurgerMenuWrapper>
  );
}
