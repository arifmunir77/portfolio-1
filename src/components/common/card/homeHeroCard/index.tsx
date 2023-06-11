import { Card } from "react-bootstrap";
import { BorderBottom, HomeHeroWrapper } from "./element";
import { FaPencilAlt } from "react-icons/fa";

function HomeHeroCard({ item }) {
  return (
    <HomeHeroWrapper>
      <Card>
        <Card.Body>
          {item.icon}
          <BorderBottom />

          <Card.Title>{item.header}</Card.Title>
          <Card.Text>{item.text} </Card.Text>
        </Card.Body>
      </Card>
    </HomeHeroWrapper>
  );
}

export default HomeHeroCard;
