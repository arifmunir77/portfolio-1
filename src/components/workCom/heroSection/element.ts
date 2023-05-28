import styled from "styled-components";
import { workHeroSectionImg } from "assets";

export const HeroWrapper = styled.div`
  background-image: url(${workHeroSectionImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  .top-container {
    margin-top: 10rem;
    margin-bottom: 10rem;
  }
`;

export const HeroHeading = styled.h1`
  font-size: 80px;
  font-family: "Teko";
  text-align: center;
  color: #fff;
`;
