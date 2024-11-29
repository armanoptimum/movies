import CardWrapper from './styles';

export default function Card({ movieName, date, img }) {
  return (
    <CardWrapper className="card">
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
