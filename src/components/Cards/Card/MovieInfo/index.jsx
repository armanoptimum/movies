import { MovieInfoWrapper, MovieName, MovieRatingWrapper, PerCentIcon, MovieDate, MovieDescription } from './styles';

export default function MovieInfo({ rating, movieName, date, description }) {
  return (
    <MovieInfoWrapper>
      <MovieRatingWrapper>
        {rating}
        <PerCentIcon>%</PerCentIcon>
      </MovieRatingWrapper>
      <MovieName>{movieName}</MovieName>
      <MovieDate>{date}</MovieDate>
      <MovieDescription>{description}</MovieDescription>
    </MovieInfoWrapper>
  );
}
