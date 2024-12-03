import CardWrapper from './styles';
import threeDots from '../../../assets/three-dots.svg';
import listImg from '../../../assets/list.svg';
import favoriteImg from '../../../assets/favorite.svg';
import bookMarkImg from '../../../assets/bookMark.svg';
import starImg from '../../../assets/star.svg';
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
          <li>
            <img src={listImg} alt="list image" />
            <span>Add to list</span>
          </li>
          <li>
            <img src={favoriteImg} alt="favorites" />
            <span>Favorite</span>
          </li>
          <li>
            <img src={bookMarkImg} alt="bookmark" />
            <span>Watchlist</span>
          </li>
          <li>
            <img src={starImg} alt="rating" />
            <span>Your Rating</span>
          </li>
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
