import { MainContainer, Navbar } from "components/common";
import { AboutUsHeading, AboutUsWrapper, HeroWrapper } from "./element";

const HeroSection = () => {
  return (
    <AboutUsWrapper>
      <HeroWrapper>
        <Navbar />
        <MainContainer>
          <AboutUsHeading className="top-container">About us.</AboutUsHeading>
        </MainContainer>
      </HeroWrapper>
    </AboutUsWrapper>
  );
};

export default HeroSection;
