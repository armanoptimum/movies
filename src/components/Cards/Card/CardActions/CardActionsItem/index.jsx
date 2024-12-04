import { CardActionsImg, CardActionsItemWrapper, CardActionsTitle } from './styles';

export default function CardItem({ img, name }) {
  return (
    <CardActionsItemWrapper>
      <CardActionsImg src={img} alt={name} />
      <CardActionsTitle>{name}</CardActionsTitle>
    </CardActionsItemWrapper>
  );
}
