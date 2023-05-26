import styled from "styled-components";
import { heroSectionImg } from "assets";

export const HeroSectionWrapper = styled.div`
  background-image: url(${heroSectionImg});
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  min-height: 100vh;

  @media (max-width: 991.98px) {
    min-height: 00vh;
  }
`;

export const HeroCreativeText = styled.p`
  color: #66fcf1;
  margin-top: 10rem;

  @media (max-width: 991.98px) {
    text-align: center;
    margin-top: 4rem;
  }
`;

export const HeroHeading = styled.h1`
  font-family: "Teko" !important;
  color: #fff;
  font-size: 80px;
  font-weight: 700;

  @media (max-width: 991.98px) {
    text-align: center;
    font-size: 70px;
  }

  @media (max-width: 575.98px) {
    font-size: 50px;
  }
`;

export const HeroButton = styled.button`
  padding: 20px 30px;
  border: 2px solid #66fcf1;
  background: transparent;
  color: #fff;

  @media (max-width: 991.98px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;
