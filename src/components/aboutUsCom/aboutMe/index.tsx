import { MainContainer, MainRow, MainCol } from "components/common";
import {
  AboutHeader,
  AboutMeCardHeading,
  AboutMeWrapper,
  ContentWrapper,
  DescriptionText,
} from "./element";
import { Card, Image } from "react-bootstrap";
import { dp } from "assets";
import { FiTarget } from "react-icons/fi";

const AboutMe = () => {
  return (
    <AboutMeWrapper>
      <MainContainer className="top-container">
        <AboutMeCardHeading>About Me</AboutMeCardHeading>
        <ContentWrapper>
          <MainRow>
            <MainCol xl={5}>
              <Image fluid src={dp} />
            </MainCol>
            <MainCol xl={7}>
              <FiTarget className="icon" />
              <AboutHeader>
                Transforming ideas into captivating web experiences with
                expertise.
              </AboutHeader>
              <DescriptionText>
                As a Frontend Web Developer with experience of more than 3
                years, I am at the forefront of crafting captivating and
                user-centric web experiences. With a passion for technology and
                a keen eye for design, I specialize in turning ideas and
                concepts into functional and visually appealing websites that
                leave a lasting impact. My proficiency React and Next JS along
                with latest CSS frameworks empowers me to bring creativity to
                life while ensuring seamless interactions and responsiveness
                across various devices.
                <br />
                <br />
                Driven by a constant thirst for knowledge, I stay abreast of the
                latest web development trends and best practices, allowing me to
                implement cutting-edge solutions and optimize user experiences.
                My ability to collaborate effectively with cross-functional
                teams enables me to translate complex requirements into elegant
                and efficient code, ensuring projects are delivered on time and
                to the highest quality standards.
                <br />
                <br />
                Dedicated to continuously honing my skills, I approach every
                project with an innovative mindset, seeking solutions that push
                boundaries and enhance functionality. Whether it's a dynamic
                e-commerce platform, an engaging portfolio website, or a
                user-friendly web application, my mission is to bridge the gap
                between design and technology, creating seamless digital
                journeys that leave a lasting impression on users.
              </DescriptionText>
            </MainCol>
          </MainRow>
        </ContentWrapper>
      </MainContainer>
    </AboutMeWrapper>
  );
};

export default AboutMe;
