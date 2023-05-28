import { MainCol, MainContainer, MainRow } from "components/common";
import {
  HeroButton,
  HeroHeading,
  HeroSectionWrapper,
  HeroCreativeText,
  TextDiv,
} from "./styled";

import { heroCardData } from "components/data";
import { HeroCard } from "components/common/card";
import { Navbar } from "components/common";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function HeroSection() {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          delay: 0.5,
          duration: 1,
        },
      });
    }

    if (!inView) {
      animation.start({
        x: -1200,
      });
    }
  }, [inView]);
  return (
    <div>
      <HeroSectionWrapper>
        <Navbar />
        <MainContainer className="top-container">
          <TextDiv animate={animation} ref={ref}>
            <HeroCreativeText>CREATIVE MIND, CREATIVE WORKS.</HeroCreativeText>
            <HeroHeading>
              We are digital <br /> agency.
            </HeroHeading>

            <HeroButton>GETTING STARTED</HeroButton>
          </TextDiv>
        </MainContainer>
      </HeroSectionWrapper>
      <MainContainer className="bottom-container">
        <MainRow>
          {heroCardData.map((item, index) => (
            <MainCol lg={4}>
              <HeroCard item={item} index={index} />
            </MainCol>
          ))}
        </MainRow>
      </MainContainer>
    </div>
  );
}

export default HeroSection;
