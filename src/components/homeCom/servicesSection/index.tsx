import { MainCol, MainContainer, MainRow } from "components/common";
import {
  FlexBorderDiv,
  FlexDiv,
  ServicesHeading,
  ServicesText,
  ServicesWrapper,
} from "./styles";
import ServicesCard from "components/common/card/servicesCard";
import { servicesCardData } from "components/data";
import { motion } from "framer-motion";

const ServicesSection = () => {
  return (
    <ServicesWrapper>
      <MainContainer>
        <FlexDiv>
          <FlexBorderDiv />
          <ServicesHeading>Services</ServicesHeading>
        </FlexDiv>
        <ServicesText>OUR SERVICES FOR CLIENTS</ServicesText>

        <MainRow>
          {servicesCardData.map((item, index) => (
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
