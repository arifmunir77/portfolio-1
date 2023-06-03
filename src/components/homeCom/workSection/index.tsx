import WorkCard from "components/common/card/workCard";
import {
  BorderDiv,
  FlexDiv,
  WorkButton,
  WorkHeading,
  WorkText,
  WorkWrapper,
} from "./element";
import { workCardData } from "components/data";
import { MainCol, MainContainer, MainRow } from "components/common";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const WorkSection = () => {
  return (
    <WorkWrapper>
      <div className="workContainer">
        <MainContainer>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.5 }}
          >
            <FlexDiv>
              <div className="flex">
                <BorderDiv />
                <WorkHeading>Work</WorkHeading>
              </div>
              <Link to="/work">
                <WorkButton>VIEW ALL</WorkButton>
              </Link>
            </FlexDiv>

            <WorkText>THINGS WE'VE MADE</WorkText>
          </motion.div>
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
