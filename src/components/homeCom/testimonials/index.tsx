import { MainCol, MainContainer, MainRow } from "components/common";
import {
  FlexBorderDiv,
  FlexDiv,
  MainHeading,
  TestimonialsContainer,
  SubText,
  SwiperWrapper,
} from "./element";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCoverflow,
} from "swiper";
import "swiper/swiper-bundle.min.css";
import { Image } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { TestimonialCard } from "components/common/card";
import { testimonialsData } from "components/data";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]);

const breakpoints = {
  100: {
    slidesPerView: 1,
  },
  576: {
    slidesPerView: 1.5,
  },
  768: {
    slidesPerView: 2,
  },
  992: {
    slidesPerView: 2.5,
  },
  1200: {
    slidesPerView: 3,
  },
  1400: {
    slidesPerView: 4,
  },
};

function Testimonials() {
  return (
    <TestimonialsContainer>
      <MainContainer>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.5 }}
        >
          <FlexDiv>
            <FlexBorderDiv />
            <MainHeading>Testimonials</MainHeading>
          </FlexDiv>

          <SubText>
            Kind words from colleagues and superiors, highlighting their
            positive sentiments towards my professional collaboration and
            contributions.
          </SubText>
        </motion.div>
      </MainContainer>

      <SwiperWrapper
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <Swiper
          breakpoints={breakpoints}
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          pagination={true}
          navigation={false}
          grabCursor={true}
          preventClicks={true}
          preventClicksPropagation={true}
        >
          {testimonialsData.map((data) => (
            <SwiperSlide>
              <TestimonialCard data={data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperWrapper>
    </TestimonialsContainer>
  );
}

export default Testimonials;
