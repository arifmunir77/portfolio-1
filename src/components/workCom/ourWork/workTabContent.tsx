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
  WarningDiv,
  WorkContentTabDiv,
} from "./element";
import { OurWorkImgOne } from "assets";
import { MainCol, MainRow, WorkModal } from "components/common";
import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";

function WorkTabContent({ filteredData }) {
  return (
    <WorkContentTabDiv>
      {filteredData.map((item) => (
        <ContentWrapper>
          <ImageDiv>
            <Image fluid src={item.mainImage} />
          </ImageDiv>
          <TextWrapper>
            <MainRow>
              <MainCol lg={9}>
                <ProjectTextDiv>
                  <OurWorkProjectHeading>{item?.title}</OurWorkProjectHeading>
                  <OurWorkProjectText>{item.description}</OurWorkProjectText>

                  {item.link && (
                    <OurWorkProjectText>
                      Project Link:
                      <a href={item.link} target="_blank">
                        {""} {item.link}
                      </a>
                    </OurWorkProjectText>
                  )}

                  <WorkModal item={item} />
                </ProjectTextDiv>
              </MainCol>
              <MainCol lg={3} className="bottom-col">
                <InformationDiv>
                  <InformationText>Details</InformationText>
                  <InformationContentDiv>
                    <h4 className="main-text"> Project Name:</h4>
                    <p className="sub-text"> {item.title}</p>
                  </InformationContentDiv>
                  <InformationContentDiv>
                    <h4 className="main-text"> Category:</h4>
                    <p className="sub-text"> {item.category}</p>
                  </InformationContentDiv>
                  <InformationContentDiv>
                    <h4 className="main-text"> Duration:</h4>
                    <p className="sub-text"> {item.duration}</p>
                  </InformationContentDiv>
                  <InformationContentDiv>
                    <h4 className="main-text"> Date:</h4>
                    <p className="sub-text"> {item.date}</p>
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
