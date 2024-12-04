import { itemData } from "../../data";
import CardItem from "./CardActionsItem";
import { CardActionsList, CardActionsWrapper } from "./styles";

export default function CardActions({active}) {  
    return (
        <CardActionsWrapper $active={active}>
        <CardActionsList>
          {
            itemData.map((item, index) => (
            <CardItem key={index} img={item.img} name={item.name} />
            ))
          }
        </CardActionsList>
      </CardActionsWrapper>
    )
}