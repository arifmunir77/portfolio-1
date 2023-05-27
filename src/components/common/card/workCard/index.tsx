import Card from "react-bootstrap/Card";
import { WorkFlex } from "./element";
import { Image } from "react-bootstrap";

const WorkCard = ({ item }) => {
  return (
    <WorkFlex key={item.id}>
      <Image fluid src={item.img} />
    </WorkFlex>
  );
};

export default WorkCard;
