import CardItemWrapper from './styles';

export default function CardItem({ img, name }) {
  return (
    <CardItemWrapper>
      <img src={img} alt={name} />
      <span>{name}</span>
    </CardItemWrapper>
  );
}
