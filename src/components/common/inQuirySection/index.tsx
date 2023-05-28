import {
  ContacUsIcon,
  ContacUsIconDiv,
  ContacUsWrapper,
  ContactUsButton,
  ContactUsHeading,
} from "./element";
import { MainContainer } from "components/common";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";

const ContacUs = () => {
  return (
    <ContacUsWrapper>
      <MainContainer className="contact-container" s>
        <ContacUsIconDiv>
          <ContacUsIcon>
            <FiFacebook className="icon" />
            <AiOutlineInstagram className="icon" />
            <FiTwitter className="icon" />
            <AiOutlineLinkedin className="icon" />
          </ContacUsIcon>
        </ContacUsIconDiv>
        <ContactUsHeading>Have any project in mind?</ContactUsHeading>
        <ContactUsButton>MAKE INQUIRY</ContactUsButton>
      </MainContainer>
    </ContacUsWrapper>
  );
};

export default ContacUs;
