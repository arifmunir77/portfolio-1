import { MainContainer, Navbar } from "components/common";
import { HeroHeading, HeroSectionText, HeroWrapper } from "./element";

function HeroSection() {
  return (
    <HeroWrapper>
      <Navbar />
      <MainContainer className="top-container">
        <HeroHeading>Our Works.</HeroHeading>
        <HeroSectionText>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          deserunt vitae! Expedita illum ducimus natus similique sit dolorum
          provident ullam. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. A, architecto?
        </HeroSectionText>
      </MainContainer>
    </HeroWrapper>
  );
}

export default HeroSection;
