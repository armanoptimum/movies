import { useState } from 'react';
import CardActions from './CardActions';
import { CardWrapper, MovieImg, ThreeDots } from './styles';
import threeDots from '@/assets/three-dots.svg';
import MovieInfo from './MovieInfo';

export default function Card({ movieName, description, date, img, rating }) {
  const [active, setActive] = useState(false);

  const toggleBlure = () => {
    setActive((prev) => !prev);
  };

  return (
    <CardWrapper>
      <CardActions active={active} />
      <ThreeDots onClick={toggleBlure} src={threeDots} alt="three dots" />
      <MovieImg src={img} alt={movieName} />
      <MovieInfo movieName={movieName} description={description} date={date} rating={rating} />
    </CardWrapper>
  );
}
