import { OurWorkHeading, OurWorkText, OurWorkWrapper } from "./element";
import { MainContainer } from "components/common";

const OurWork = () => {
  return (
    <OurWorkWrapper>
      <MainContainer>
        <div className="ourContainer">
          <OurWorkHeading>Our Works</OurWorkHeading>
          <OurWorkText>SEE ALL OUR WORKS</OurWorkText>
        </div>
      </MainContainer>
    </OurWorkWrapper>
  );
};

export default OurWork;
