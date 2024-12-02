import CardWrapper from './styles';
import threeDots from '../../../assets/three-dots.svg';
import { useState } from 'react';

export default function Card({ movieName, date, img, rating }) {
  const [action, setAction] = useState(false);

  function toggleBlure() {
    setAction((prev) => !prev);
  }

  return (
    <CardWrapper className="card">
      <div className={action ? 'blur active' : 'blur'}>
        <ul>
          <li>Add to list</li>
          <li>Favorite</li>
          <li>Watchlist</li>
          <li>Your Rating</li>
        </ul>
      </div>
      <img onClick={toggleBlure} id="dots" src={threeDots} alt="three dots" />
      <img id="movieImg" src={img} alt="" />
      <div className="info">
        <div className="rating">
          {rating}
          <span id="per-cent">%</span>
        </div>
        <h2>
          <a href="">{movieName}</a>
        </h2>
        <p>{date}</p>
      </div>
    </CardWrapper>
  );
}
