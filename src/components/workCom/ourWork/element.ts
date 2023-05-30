import styled from "styled-components";

export const OurWorkWrapper = styled.div`
  background-color: #0b0c10;
  overflow: hidden;
  .ourContainer {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }

  .left {
    margin-top: 2rem;
    margin-bottom: 2rem;
    margin-left: 30px;
    @media (max-width: 991.98px) {
      margin-left: 0;
    }
  }

  .TopMargin {
    margin-top: 2rem;
  }
`;

export const OurWorkHeading = styled.h1`
  font-size: 80px;
  font-family: "Teko";
  text-align: center;
  color: #fff;
  margin-bottom: 0px;
`;

export const OurWorkText = styled.p`
  text-align: center;
  color: #66fcf1;
`;

export const OurWorkImg = styled.img`
  border-radius: 15px;
`;

export const OurWorkProjectHeading = styled.h1`
  font-size: 80px;
  font-family: "Teko";
  color: #fff;
  margin-bottom: 0;
  @media (max-width: 991.98px) {
    text-align: center;
  }
`;
export const OurWorkProjectText = styled.p`
  color: #fff;
  @media (max-width: 991.98px) {
    text-align: center;
  }
`;

export const OurWorkProjectButton = styled.button`
  color: #66fcf1;
  background: transparent;
  border: none;
  margin-top: 2rem;
  @media (max-width: 991.98px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;
