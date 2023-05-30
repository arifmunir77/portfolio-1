import styled from "styled-components";

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

export const WorkModalContainer = styled.div`
  background-color: #121212;
  min-height: 500px;
  box-shadow: 0 0 20px 10px rgba(102, 252, 241, 0.8);
`;

export const SwiperWrapper = styled.div`
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

  .swiper-button-next {
    /* background-image: url(); */
    margin-right: 10rem;
    background-repeat: no-repeat !important;
    width: 4rem;

    &::after {
      display: none;
    }

    @media (max-width: 1660px) {
      margin-right: -2px;
    }

    @media (max-width: 1480px) {
      margin-right: 0;
    }

    @media (max-width: 756px) {
      display: none;
    }
  }

  .swiper-button-prev {
    color: black;
    /* background-image: url(); */
    margin-left: 10rem;
    background-repeat: no-repeat !important;
    width: 100% !important;

    &::after {
      display: none;
    }

    @media (max-width: 1660px) {
      margin-left: -2px;
    }

    @media (max-width: 1480px) {
      margin-left: 0;
    }

    @media (max-width: 756px) {
      display: none;
    }
  }

  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal,
  .swiper-pagination-custom,
  .swiper-pagination-fraction {
    display: none;
  }
`;
