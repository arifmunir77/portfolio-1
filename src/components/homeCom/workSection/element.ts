import styled from "styled-components";

export const WorkWrapper = styled.div`
  overflow: hidden;
  background-color: rgb(18, 18, 18);

  .workContainer {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }

  .main-col {
    flex: 1;
    transition: 0.3s ease-in-out all;
    padding: 0;
    margin: 0;

    &:hover {
      flex: 1.5;
      transition: 0.3s ease-in-out all;

      @media (max-width: 991.98px) {
        flex: 1;
      }
    }
  }
`;

export const WorkHeading = styled.h1`
  font-family: "Teko";
  color: #fff;
  font-size: 80px;
  margin-bottom: 0;
  @media (max-width: 991.98px) {
    text-align: center;
  }
`;

export const WorkText = styled.p`
  color: #66fcf1;
  @media (max-width: 991.98px) {
    text-align: center;
  }
`;
