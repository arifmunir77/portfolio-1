import { MainCol, MainContainer, MainRow } from "components/common";
import {
  HeroButton,
  HeroHeading,
  HeroSectionWrapper,
  HeroCreativeText,
} from "./styled";

import { heroCardData } from "components/data";
import { HeroCard } from "components/common/card";

function HeroSection() {
  return (
    <HeroSectionWrapper>
      <MainContainer>
        <HeroCreativeText>CREATIVE MIND, CREATIVE WORKS.</HeroCreativeText>
        <HeroHeading>
          We are digital <br /> agency.
        </HeroHeading>
        <HeroButton>GETTING STARTED</HeroButton>

        <MainRow>
          {heroCardData.map((item, index) => (
            <MainCol lg={4}>
              <HeroCard item={item} index={index} />
            </MainCol>
          ))}
        </MainRow>
      </MainContainer>
    </HeroSectionWrapper>
  );
}

export default HeroSection;
