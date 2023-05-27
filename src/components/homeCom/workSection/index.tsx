import WorkCard from "components/common/card/workCard";
import { WorkWrapper } from "./element";
import { workCardData } from "components/data";
import useItems from "antd/es/menu/hooks/useItems";

const WorkSection = () => {
  return (
    <WorkWrapper>
      {workCardData.map((item) => (
        <WorkCard item={item} />
      ))}
    </WorkWrapper>
  );
};

export default WorkSection;
