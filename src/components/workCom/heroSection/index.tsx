import { MainContainer, Navbar } from "components/common";
import { HeroHeading, HeroWrapper } from "./element";

function HeroSection() {
  return (
    <HeroWrapper>
      <Navbar />
      <MainContainer className="top-container">
        <HeroHeading>Our Works.</HeroHeading>
      </MainContainer>
    </HeroWrapper>
  );
}

export default HeroSection;
