import {
  OurWorkHeading,
  OurWorkImg,
  OurWorkProjectHeading,
  OurWorkProjectText,
  OurWorkText,
  OurWorkWrapper,
} from "./element";
import { MainCol, MainContainer, MainRow } from "components/common";
import { OurWorkData } from "components/data";
import { WorkModal } from "components/common";
import Worktabs from "./worktabs";

const OurWork = () => {
  return (
    <OurWorkWrapper>
      <MainContainer>
        <div className="ourContainer">
          <OurWorkHeading>Our Works</OurWorkHeading>
          <OurWorkText>SEE ALL OUR WORKS</OurWorkText>
        </div>

        <Worktabs />
      </MainContainer>
    </OurWorkWrapper>
  );
};

export default OurWork;
