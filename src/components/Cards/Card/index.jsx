import { useState } from 'react';
import CardActions from './CardActions';
import { CardWrapper, MovieImg, ThreeDots } from './styles';
import threeDots from '@/assets/icons/three-dots.svg';
import MovieInfo from './MovieInfo';
import defaultImage from '@/assets/images/default.png';

export default function Card({ movieName = '', description = '', date = '', img, rating = 0 }) {
  const [active, setActive] = useState(false);
  const [imageSrc, setImageSrc] = useState(defaultImage);

  const toggleBlure = () => {
    setActive((prev) => !prev);
  };

  const handleImageLoad = () => {
    setImageSrc(img);
  };

  return (
    <CardWrapper>
      <CardActions active={active} />
      <ThreeDots onClick={toggleBlure} src={threeDots} alt="three dots" />
      <MovieImg onLoad={handleImageLoad} src={imageSrc} alt={movieName} />
      <MovieInfo movieName={movieName} description={description} date={date} rating={rating} />
    </CardWrapper>
  );
}
