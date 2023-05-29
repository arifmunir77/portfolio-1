import { CountUpWrapper, IconHeading, IconText, IconWrapper } from "./element";
import { MainCol, MainContainer, MainRow } from "components/common";
import { RiContactsLine } from "react-icons/ri";
import { AiOutlineSetting, AiOutlineCalendar } from "react-icons/ai";

const CountUp = () => {
  return (
    <CountUpWrapper>
      <MainContainer className="top-container">
        <MainRow>
          <MainCol lg={4}>
            <IconWrapper>
              <RiContactsLine className="IconContact" />
              <div>
                <IconHeading>258+</IconHeading>
                <IconText>Happy Cients</IconText>
              </div>
            </IconWrapper>
          </MainCol>
          <MainCol lg={4}>
            <IconWrapper>
              <AiOutlineSetting className="IconContact" />
              <div>
                <IconHeading>50+</IconHeading>
                <IconText>Project Completed</IconText>
              </div>
            </IconWrapper>
          </MainCol>
          <MainCol lg={4}>
            <IconWrapper>
              <AiOutlineCalendar className="IconContact" />
              <div>
                <IconHeading>10+</IconHeading>
                <IconText>Years of Experience</IconText>
              </div>
            </IconWrapper>
          </MainCol>
        </MainRow>
      </MainContainer>
    </CountUpWrapper>
  );
};

export default CountUp;
