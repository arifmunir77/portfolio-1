import styled from "styled-components";
import { motion } from "framer-motion";

export const TestimonialsContainer = styled.div`
  overflow: hidden;
  background-color: #0b0c10;

  .container {
    margin-top: 8rem;

    @media (max-width: 991.98px) {
      margin-top: 4rem;
      margin-bottom: 4rem;
    }
  }
`;

export const MainHeading = styled.h1`
  font-family: "Teko";
  color: #fff;
  font-size: 80px;
  margin-bottom: 0;
  @media (max-width: 991.98px) {
    text-align: center;
  }
`;

export const SubText = styled.p`
  color: #66fcf1;
  @media (max-width: 991.98px) {
    text-align: center;
  }
`;

export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  @media (max-width: 991.98px) {
    justify-content: center;
  }
`;

export const FlexBorderDiv = styled.div`
  width: 5%;
  border-top: 2px solid #66fcf1;
  @media (max-width: 991.98px) {
    width: 0%;
    border: none;
  }
`;

export const SwiperWrapper = styled(motion.div)`
  padding: 0 2rem;

  margin-bottom: 8rem;

  @media (max-width: 991.98px) {
    margin-bottom: 4rem;
  }

  .swiper-pagination-bullet {
    height: 10px;
    width: 10px;
  }

  .swiper-slide {
    padding: 4rem 0;
  }

  .swiper-pagination-bullet {
    background-color: #fff;
  }
  .swiper-pagination-bullet-active {
    background-color: #66fcf1;
  }
`;
