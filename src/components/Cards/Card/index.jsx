import { useState } from 'react';
import CardActions from './CardActions';
import CardWrapper, { ThreeDots } from './styles';
import threeDots from '../../../assets/three-dots.svg';

export default function Card({ movieName, description, date, img, rating }) {
  const [active, setActive] = useState(false);

  const toggleBlure = () => {
    setActive((prev) => !prev);
  };
  
  return (
    <CardWrapper>
      <CardActions active={active} />
      <ThreeDots  onClick={toggleBlure} src={threeDots} alt="three dots"  />
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
        <p id="description">{description}</p>
      </div>
    </CardWrapper>
  );
}
