import WorkCard from "components/common/card/workCard";
import { WorkHeading, WorkText, WorkWrapper } from "./element";
import { workCardData } from "components/data";
import { MainCol, MainContainer, MainRow } from "components/common";

const WorkSection = () => {
  return (
    <WorkWrapper>
      <div className="workContainer">
        <MainContainer>
          <WorkHeading>Work</WorkHeading>
          <WorkText>THINGS WE'VE MADE</WorkText>
        </MainContainer>
        <MainRow>
          {workCardData.map((item) => (
            <MainCol className={"main-col"}>
              <WorkCard item={item} />
            </MainCol>
          ))}
        </MainRow>
      </div>
    </WorkWrapper>
  );
};

export default WorkSection;
