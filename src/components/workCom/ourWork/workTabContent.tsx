import { Image } from "react-bootstrap";
import {
  ContentWrapper,
  ImageDiv,
  InformationContentDiv,
  InformationDiv,
  InformationText,
  OurWorkProjectHeading,
  OurWorkProjectText,
  ProjectTextDiv,
  TextWrapper,
  WorkContentTabDiv,
} from "./element";
import { OurWorkImgOne } from "assets";
import { MainCol, MainRow, WorkModal } from "components/common";

const data = [
  {
    id: 1,
  },
  { id: 2 },
  { id: 3 },
];

function WorkTabContent() {
  return (
    <WorkContentTabDiv>
      {data.map(() => (
        <ContentWrapper>
          <ImageDiv>
            <Image fluid src={OurWorkImgOne} />
          </ImageDiv>
          <TextWrapper>
            <MainRow>
              <MainCol lg={9}>
                <ProjectTextDiv>
                  <OurWorkProjectHeading>
                    Givest - Non Profit Website
                  </OurWorkProjectHeading>
                  <OurWorkProjectText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum ab autem sunt blanditiis nostrum, illum
                    perferendis numquam harum quod explicabo molestiae libero
                    accusamus dolore laborum fugiat maxime hic earum impedit!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum ab autem sunt blanditiis nostrum, illum
                    perferendis numquam harum quod explicabo molestiae libero
                    accusamus dolore laborum fugiat maxime hic earum impedit!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum ab autem sunt blanditiis nostrum, illum
                    perferendis numquam harum quod explicabo molestiae libero
                    accusamus dolore laborum fugiat maxime hic earum impedit!
                    impedit! Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Voluptatum ab autem sunt blanditiis nostrum, illum
                    perferendis numquam harum quod explicabo molestiae libero
                    accusamus dolore laborum fugiat maxime hic earum impedit!
                    impedit! Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Voluptatum ab autem sunt blanditiis nostrum, illum
                    perferendis numquam harum quod explicabo molestiae libero
                    accusamus dolore laborum fugiat maxime hic earum impedit!
                    impedit! Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Voluptatum ab autem sunt blanditiis nostrum, illum
                    perferendis numquam harum quod explicabo molestiae libero
                    accusamus dolore laborum fugiat maxime hic earum impedit!
                  </OurWorkProjectText>

                  <WorkModal />
                </ProjectTextDiv>
              </MainCol>
              <MainCol lg={3} className="bottom-col">
                <InformationDiv>
                  <InformationText>Details</InformationText>
                  <InformationContentDiv>
                    <h4 className="main-text"> Project Name:</h4>
                    <p className="sub-text"> Givest</p>
                  </InformationContentDiv>
                  <InformationContentDiv>
                    <h4 className="main-text"> Budget:</h4>
                    <p className="sub-text"> $200</p>
                  </InformationContentDiv>
                  <InformationContentDiv>
                    <h4 className="main-text"> Duration:</h4>
                    <p className="sub-text"> 1 Month</p>
                  </InformationContentDiv>
                  <InformationContentDiv>
                    <h4 className="main-text"> Date:</h4>
                    <p className="sub-text"> OCt 20, 2022</p>
                  </InformationContentDiv>
                </InformationDiv>
              </MainCol>
            </MainRow>
          </TextWrapper>
        </ContentWrapper>
      ))}
    </WorkContentTabDiv>
  );
}

export default WorkTabContent;
