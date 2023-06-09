import styled from "styled-components";
import { motion } from "framer-motion";

export const ModalWrapper = styled.div`
  button.ant-btn.css-dev-only-do-not-override-w8mnev.ant-btn-primary {
    background: transparent;
    border: none;
    box-shadow: none;
    color: #66fcf1;
    margin-top: 2rem;
  }
  .arrow-icon {
    margin-left: 5px;
  }
`;

export const WorkModalContainer = styled(motion.div)`
  background-color: #121212;
  min-height: 500px;
  box-shadow: 0 0 20px 10px rgba(102, 252, 241, 0.8);
`;

export const SwiperWrapper = styled(motion.div)`
  .swiper {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    /* height: 300px; */
    filter: blur(4px);
  }

  .swiper-slide-active {
    filter: blur(0px);
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 350px;
    border: none;
  }

  .swiper-3d .swiper-slide-shadow-left {
    background-image: none;
  }

  .swiper-3d .swiper-slide-shadow-right {
    background-image: none;
  }

  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal,
  .swiper-pagination-custom,
  .swiper-pagination-fraction {
    display: none;
  }

  .swiper-button-prev,
  .swiper-button-next {
    background-color: #66fcf1;
    border-radius: 1000px;
    width: 40px;
    height: 40px;
    top: 50%;
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 18px;
    color: #fff;
    font-weight: 900;
  }
`;

export const OurWorkProjectButton = styled.button`
  color: #66fcf1;
  background: transparent;
  border: none;
  margin-top: 1rem;
  font-size: 20px;

  @media (max-width: 991.98px) {
    margin-top: 1rem;
  }
`;
