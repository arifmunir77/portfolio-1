import { AboutUsHero } from "assets";
import styled from "styled-components";

export const AboutUsWrapper = styled.div`
  overflow: hidden;
  .top-container {
    margin-top: 10rem;
    margin-bottom: 10rem;
  }
`;

export const HeroWrapper = styled.div`
  background-image: url(${AboutUsHero});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  min-height: 100vh;
  @media (max-width: 991.98px) {
    min-height: 0;
  }
`;

export const AboutUsHeading = styled.h1`
  font-size: 80px;
  font-family: "Teko";
  text-align: center;
  color: #fff;
`;
