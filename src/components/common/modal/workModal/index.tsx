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
import { motion, AnimatePresence } from "framer-motion";

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

      <AnimatePresence>
        {isModalOpen && (
          <Modal
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            centered
            width={1000}
          >
            <WorkModalContainer
              style={{ overflow: "hidden" }}
              initial={{ scaleY: 0, minHeight: 0 }}
              animate={{ scaleY: 1, minHeight: "500px" }}
              exit={{ scaleY: 0 }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
              key={"container"}
            >
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ y: 0, opacity: 0, transition: { duration: 0.4 } }}
              >
                <SwiperWrapper
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  <Swiper
                    // activeSlideKey='2'
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
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
                    modules={[
                      EffectCoverflow,
                      Pagination,
                      Navigation,
                      Autoplay,
                    ]}
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
              </motion.div>
            </WorkModalContainer>
          </Modal>
        )}
      </AnimatePresence>
    </ModalWrapper>
  );
};

export default WorkModal;
