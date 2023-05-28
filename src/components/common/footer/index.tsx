import { MainCol, MainContainer, MainRow } from "components/common";
import {
  CalenderWrapper,
  EmailText,
  EmailWrapper,
  FooterBorder,
  FooterContactHeading,
  FooterCopyWrite,
  FooterFlex,
  FooterIcons,
  FooterImageDiv,
  FooterText,
  FooterWrapper,
  IconNumber,
  LocationText,
  LocationWrapper,
  ServicesHeading,
  ServicesText,
  TelephoneWrapper,
} from "./element";
import { logo, videoLogo } from "assets";
import { BsTelephone } from "react-icons/bs";
import { GoMail, GoCalendar } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";

function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <FooterWrapper>
      <MainContainer>
        <MainRow>
          <MainCol lg={3}>
            <FooterImageDiv>
              <img className="img-fluid logo" src={videoLogo} />
            </FooterImageDiv>
            <FooterText>We are more than a digital agency</FooterText>
          </MainCol>
          <MainCol lg={3}>
            <FooterContactHeading>Contact Us</FooterContactHeading>
            <TelephoneWrapper>
              <BsTelephone className="margin" />
              <IconNumber>+92 222 222</IconNumber>
            </TelephoneWrapper>
            <EmailWrapper>
              <GoMail className="Mail" />
              <EmailText>example@gmail.com</EmailText>
            </EmailWrapper>
            <LocationWrapper>
              <IoLocationOutline className="Mail" />
              <LocationText>Your Location</LocationText>
            </LocationWrapper>
            <CalenderWrapper>
              <GoCalendar className="Mail" />
              <CalenderWrapper>Monday to Friday</CalenderWrapper>
            </CalenderWrapper>
          </MainCol>
          <MainCol lg={3}>
            <ServicesHeading>Services</ServicesHeading>
            <ServicesText>Service 1</ServicesText>
            <ServicesText>Service 2</ServicesText>
            <ServicesText>Service 3</ServicesText>
            <ServicesText>Service 3</ServicesText>
          </MainCol>

          <MainCol lg={3}>
            <ServicesHeading>Links</ServicesHeading>
            <ServicesText>Link 1</ServicesText>
            <ServicesText>Link 2</ServicesText>
            <ServicesText>Link 3</ServicesText>
            <ServicesText>Link 4</ServicesText>
          </MainCol>
        </MainRow>
      </MainContainer>
      <FooterBorder />

      <MainContainer className="footer-container">
        <FooterFlex>
          <FooterCopyWrite>
            Copyright © {currentYear} All rights reserved
          </FooterCopyWrite>
          <FooterIcons>
            <FiFacebook className="icon" />
            <AiOutlineInstagram className="icon" />
            <FiTwitter className="icon" />
            <AiOutlineLinkedin className="icon" />
          </FooterIcons>
        </FooterFlex>
      </MainContainer>
    </FooterWrapper>
  );
}

export default Footer;
