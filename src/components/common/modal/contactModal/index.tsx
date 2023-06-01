import { useState } from "react";
import {
  ModalWrapper,
  TextDiv,
  WorkModalIcon,
  WorkModalContainer,
  WorkModalHeading,
  WorkModalText,
} from "./element";
import { NavLink } from "react-bootstrap";
import { AnimatePresence } from "framer-motion";
import { Modal } from "antd";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";

const ContactModal = () => {
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
      <NavLink onClick={showModal}>contact</NavLink>

      <AnimatePresence>
        {isModalOpen && (
          <Modal
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            centered
            width={"100vw"}
          >
            <WorkModalContainer
              style={{ overflow: "hidden" }}
              initial={{ scaleY: 0, minHeight: 0 }}
              animate={{ scaleY: 1, minHeight: "90vh" }}
              exit={{ scaleY: 0 }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
              key={"container"}
            >
              <TextDiv
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <WorkModalText>Contact Us</WorkModalText>
                <WorkModalHeading>example@gmail.com</WorkModalHeading>
                <WorkModalIcon>
                  <FiFacebook className="icon" />
                  <AiOutlineInstagram className="icon" />
                  <FiTwitter className="icon" />
                  <AiOutlineLinkedin className="icon" />
                </WorkModalIcon>
              </TextDiv>
            </WorkModalContainer>
          </Modal>
        )}
      </AnimatePresence>
    </ModalWrapper>
  );
};

export default ContactModal;
