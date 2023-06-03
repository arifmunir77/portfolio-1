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
  return (
    <div>
      <HeroSectionWrapper>
        <Navbar />
        <MainContainer className="top-container">
          <MainRow>
            <MainCol lg={6}>
              <TextDiv>
                <HeroCreativeText>
                  CREATIVE MIND, CREATIVE WORKS.
                </HeroCreativeText>
                <HeroHeading>
                  Hey, I Am Abdullah - <br />{" "}
                  <span>A Full Stack Web Developer.</span>
                </HeroHeading>

                <HeroButton>GETTING STARTED</HeroButton>
              </TextDiv>
            </MainCol>
          </MainRow>
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
