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

        {/* {OurWorkData.map((item) => (
          <MainRow className="TopMargin">
            <MainCol lg={6}>
              <OurWorkImg className="img-fluid" src={item.img} />
            </MainCol>
            <MainCol lg={6} className="Left">
              <OurWorkProjectHeading>{item.heading}</OurWorkProjectHeading>
              <OurWorkProjectText>{item.text}</OurWorkProjectText>
              <OurWorkProjectButton>
                <WorkModal />
              </OurWorkProjectButton>
            </MainCol>
          </MainRow>
        ))} */}
      </MainContainer>
    </OurWorkWrapper>
  );
};

export default OurWork;
