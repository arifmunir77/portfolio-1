import styled from "styled-components";

export const ServicesWrapper = styled.div`
  background-color: #0b0c10;
  overflow: hidden;

  .container {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
`;

export const ServicesHeading = styled.h1`
  font-family: "Teko";
  color: #fff;
  font-size: 80px;
  margin-bottom: 0;
  @media (max-width: 991.98px) {
    text-align: center;
  }
`;

export const ServicesText = styled.p`
  color: #66fcf1;
  @media (max-width: 991.98px) {
    text-align: center;
  }
`;
