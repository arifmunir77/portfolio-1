import styled from "styled-components";

export const ExperienceWrapper = styled.div`
  .wrapper-margin {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 70px;

  @media (max-width: 767.98px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const EducationButton = styled.button`
  flex: 1;
  padding: 8px 16px;
  background-color: transparent;
  border: 2px solid #fff;
  transition: 300ms all ease-in-out;
  color: #fff;
  font-size: 50px;

  &.education-active {
    background-color: #121212;
    border: 2px solid #66fcf1;
    transition: 300ms all ease-in-out;
    color: #66fcf1;
  }

  @media (max-width: 767.98px) {
    flex: 0;
    width: 100%;
  }
`;

export const ExperienceButton = styled(EducationButton)`
  &.experience-active {
    background-color: #121212;
    color: #66fcf1;
    border: 2px solid #66fcf1;
    transition: 300ms all ease-in-out;
  }
`;
