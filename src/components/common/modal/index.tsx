import React, { useState } from "react";
import { Button, Modal } from "antd";
import { ModalWrapper, SwiperWrapper, WorkModalContainer } from "./element";
import { BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { OurWorkImgOne } from "assets";
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

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]);

const WorkModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalWrapper>
      <Button type="primary" onClick={showModal}>
        Veiw Detail <BsArrowRight className="arrow-icon" />
      </Button>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
        width={1000}
      >
        <WorkModalContainer>
          <SwiperWrapper>
            <Swiper
              // activeSlideKey='2'
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              autoplay={{ delay: 1000, disableOnInteraction: false }}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2,
                slideShadows: true,
              }}
              // scrollbar={{draggable:true}}
              navigation={true}
              initialSlide={2}
              pagination={true}
              modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Image fluid src={OurWorkImgOne} />
              </SwiperSlide>

              <SwiperSlide>
                <Image fluid src={OurWorkImgOne} />
              </SwiperSlide>
              <SwiperSlide>
                <Image fluid src={OurWorkImgOne} />
              </SwiperSlide>
              <SwiperSlide>
                <Image fluid src={OurWorkImgOne} />
              </SwiperSlide>
              <SwiperSlide>
                <Image fluid src={OurWorkImgOne} />
              </SwiperSlide>
              <SwiperSlide>
                <Image fluid src={OurWorkImgOne} />
              </SwiperSlide>
              <SwiperSlide>
                <Image fluid src={OurWorkImgOne} />
              </SwiperSlide>
              <SwiperSlide>
                <Image fluid src={OurWorkImgOne} />
              </SwiperSlide>
              <SwiperSlide>
                <Image fluid src={OurWorkImgOne} />
              </SwiperSlide>
              <SwiperSlide>
                <Image fluid src={OurWorkImgOne} />
              </SwiperSlide>
            </Swiper>
          </SwiperWrapper>
        </WorkModalContainer>
      </Modal>
    </ModalWrapper>
  );
};

export default WorkModal;
