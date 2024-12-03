import CardWrapper from './styles';
import threeDots from '../../../assets/three-dots.svg';
import { useState } from 'react';
import CardItem from './CardItem';
import { itemData } from '../utils';

export default function Card({ movieName, description, date, img, rating }) {
  const [action, setAction] = useState(false);

  function toggleBlure() {
    setAction((prev) => !prev);
  }

  return (
    <CardWrapper>
      <div className={action ? 'blur active' : 'blur'}>
        <ul>
          {itemData.map((item, index) => (
            <CardItem key={index} img={item.img} name={item.name} />
          ))}
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
        <p id="description">{description}</p>
      </div>
    </CardWrapper>
  );
}
