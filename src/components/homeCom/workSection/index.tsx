import WorkCard from "components/common/card/workCard";
import { WorkWrapper } from "./element";
import { workCardData } from "components/data";
import { MainCol, MainRow } from "components/common";

const WorkSection = () => {
  return (
    <WorkWrapper>
      <MainRow>
        {workCardData.map((item) => (
          <MainCol className={"main-col"}>
            <WorkCard item={item} />
          </MainCol>
        ))}
      </MainRow>
    </WorkWrapper>
  );
};

export default WorkSection;
