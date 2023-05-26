import { MainCol, MainContainer, MainRow } from "components/common";
import {
  HeroButton,
  HeroHeading,
  HeroSectionWrapper,
  HeroCreativeText,
} from "./styled";

import { heroCardData } from "components/data";
import { HeroCard } from "components/common/card";
import { Navbar } from "components/common";

function HeroSection() {
  return (
    <div>
      <HeroSectionWrapper>
        <Navbar />
        <MainContainer className="top-container">
          <HeroCreativeText>CREATIVE MIND, CREATIVE WORKS.</HeroCreativeText>
          <HeroHeading>
            We are digital <br /> agency.
          </HeroHeading>
          <HeroButton>GETTING STARTED</HeroButton>
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
