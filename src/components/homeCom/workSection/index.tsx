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
          <motion.div>
            <FlexDiv>
              <div className="flex">
                <BorderDiv
                  initial={{ opacity: 0, width: "0" }}
                  whileInView={{ opacity: 1, width: "100px" }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                />
                <WorkHeading
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  Work
                </WorkHeading>
              </div>
              <Link to="/work">
                <WorkButton
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  VIEW ALL
                </WorkButton>
              </Link>
            </FlexDiv>

            <WorkText
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              THINGS WE'VE MADE
            </WorkText>
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
