import styled from "styled-components";
import { heroSectionImg } from "assets";
import { motion } from "framer-motion";

export const HeroSectionWrapper = styled(motion.div)`
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

export const TextDiv = styled(motion.div)``;

export const HeroCreativeText = styled.p`
  color: #fff;
  margin-top: 6rem;

  @media (max-width: 991.98px) {
    text-align: center;
    margin-top: 6rem;
  }
`;

export const HeroHeading = styled.h1`
  font-family: "Teko" !important;
  color: #fff;
  font-size: 80px;
  font-weight: 700;

  span {
    color: #66fcf1;
  }

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
