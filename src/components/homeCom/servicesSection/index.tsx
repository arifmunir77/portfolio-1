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
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
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
