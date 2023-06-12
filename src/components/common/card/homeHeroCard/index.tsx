import { Card } from "react-bootstrap";
import { BorderBottom, HomeHeroWrapper } from "./element";
import { FaPencilAlt } from "react-icons/fa";

function HomeHeroCard({ item }) {
  return (
    <HomeHeroWrapper>
      <Card>
        <Card.Body>
          {item.icon}
          <BorderBottom
            initial={{ opacity: 0, width: "0" }}
            whileInView={{ opacity: 1, width: "50px" }}
            transition={{ duration: 1, delay: 0.45 }}
          />

          <Card.Title>{item.header}</Card.Title>
          <Card.Text>{item.text} </Card.Text>
        </Card.Body>
      </Card>
    </HomeHeroWrapper>
  );
}

export default HomeHeroCard;
