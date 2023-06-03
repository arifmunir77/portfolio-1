import { MainCol, MainContainer, MainRow } from "components/common";
import {
  BorderDiv,
  FlexDiv,
  ServicesWrapper,
  WorkButton,
  WorkHeading,
  WorkText,
} from "./styles";
import ServicesCard from "components/common/card/servicesCard";
import { servicesCardData } from "components/data";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  return (
    <ServicesWrapper>
      <MainContainer>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.5 }}
        >
          <FlexDiv>
            <div className="flex">
              <BorderDiv />
              <WorkHeading>Services</WorkHeading>
            </div>
            <Link to="/services">
              <WorkButton>VIEW ALL</WorkButton>
            </Link>
          </FlexDiv>

          <WorkText>OUR SERVICES FOR CLIENTS</WorkText>
        </motion.div>

        <MainRow>
          {servicesCardData.slice(0, 3).map((item, index) => (
            <MainCol lg={4}>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <ServicesCard item={item} index={index} />
              </motion.div>
            </MainCol>
          ))}
        </MainRow>
      </MainContainer>
    </ServicesWrapper>
  );
};

export default ServicesSection;
