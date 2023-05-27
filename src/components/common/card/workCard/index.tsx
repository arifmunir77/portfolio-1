import Card from "react-bootstrap/Card";
import { WorkFlex, WorkFlexImg } from "./element";

const WorkCard = ({ item }) => {
  return (
    <WorkFlex key={item.id}>
      <WorkFlexImg src={item.img} />
    </WorkFlex>
  );
};

export default WorkCard;
