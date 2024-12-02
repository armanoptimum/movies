import CardWrapper from './styles';
import threeDots from '../../../assets/three-dots.svg';

export default function Card({ movieName, date, img }) {
  return (
    <CardWrapper className="card">
      <img id="dots" src={threeDots} alt="three dots" />
      <img id="movieImg" src={img} alt="" />
      <div className="info">
        <h2>
          <a href="">{movieName}</a>
        </h2>
        <p>{date}</p>
      </div>
    </CardWrapper>
  );
}
