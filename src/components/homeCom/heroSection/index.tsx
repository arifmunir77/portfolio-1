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
import { useEffect, useRef } from "react";
import { init } from "ityped";

function HeroSection() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      strings: [
        "Full Stack Magician.",
        "Problem Solver.",
        "Visual Storyteller.",
        "Pixel Perfectionist.",
        "Knowledge Seeker.",
        "Continuous Learner.",
        "Big Thinker.",
        "Dream Chaser.",
      ],
    });
  }, []);

  return (
    <div>
      <HeroSectionWrapper>
        <Navbar />
        <MainContainer className="top-container">
          <MainRow>
            <MainCol lg={8}>
              <TextDiv>
                <HeroCreativeText>
                  CREATIVE MIND, CREATIVE WORKS.
                </HeroCreativeText>
                <HeroHeading>
                  Hey, I'm Abdullah - <br /> A &nbsp;
                  <span ref={textRef}></span>
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
