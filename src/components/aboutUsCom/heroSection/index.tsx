import { MainContainer, Navbar } from "components/common";
import {
  AboutUsHeading,
  AboutUsWrapper,
  HeroSectionText,
  HeroWrapper,
} from "./element";

const HeroSection = () => {
  return (
    <AboutUsWrapper>
      <HeroWrapper>
        <Navbar />
        <MainContainer className="top-container">
          <AboutUsHeading>About us.</AboutUsHeading>
          <HeroSectionText>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            deserunt vitae! Expedita illum ducimus natus similique sit dolorum
            provident ullam. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. A, architecto?
          </HeroSectionText>
        </MainContainer>
      </HeroWrapper>
    </AboutUsWrapper>
  );
};

export default HeroSection;
