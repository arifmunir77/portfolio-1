import { MainContainer } from "components/common";
import {
  AboutMeCardHeading,
  AboutMeCardHeadingText,
  AboutMeCardText,
  AboutMeCardWrapper,
  AboutMeWrapper,
  Left,
  Right,
} from "./element";
import { Card } from "react-bootstrap";

const AboutMe = () => {
  return (
    <AboutMeWrapper>
      <MainContainer className="top-container">
        <AboutMeCardWrapper>
          <Left>
            <Card>
              <Card.Img src="holder.js/100px180" />
            </Card>
          </Left>

          <Right className="">
            <AboutMeCardHeading>I’m Abdullah Abbasi</AboutMeCardHeading>
            <AboutMeCardHeadingText>
              UI/UX designer specializing in <br /> shopify & webflow.
            </AboutMeCardHeadingText>
            <AboutMeCardText>
              Lorem Ipsum is simply dummy text of the printing and pesetting
              industry has been the industry's standard dummy text ever since
              the 1500s, when an unkn own printer took galley of type and
              scrambled.
            </AboutMeCardText>
          </Right>
        </AboutMeCardWrapper>
      </MainContainer>
    </AboutMeWrapper>
  );
};

export default AboutMe;
