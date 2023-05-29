import styled from "styled-components";

export const AboutMeWrapper = styled.div`
  background-color: #0b0c10;
  overflow: hidden;
  .top-container {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }

  .card {
    height: 300px;
  }
`;

export const AboutMeCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;

  @media (max-width: 991.98px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Left = styled.div`
  flex: 1;
`;
export const Right = styled.div`
  flex: 2;
`;

export const AboutMeCardHeading = styled.h1`
  font-size: 80px;
  font-family: "Teko";
  color: #fff;
  margin-top: 1rem;
  margin-bottom: 0;
  @media (max-width: 991.98px) {
    text-align: center;
  }
`;

export const AboutMeCardHeadingText = styled.p`
  font-size: 26px;
  color: #858792;
  font-weight: 600;
  @media (max-width: 991.98px) {
    text-align: center;
  }
`;

export const AboutMeCardText = styled.p`
  color: #66fcf1;
  @media (max-width: 991.98px) {
    text-align: center;
  }
`;
