import React, { useState } from "react";
import { Button, Modal } from "antd";
import { ModalWrapper, WorkModalContainer } from "./element";
import { BsArrowRight } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

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
              sddsds
            </WorkModalContainer>
          </Modal>
        )}
      </AnimatePresence>
    </ModalWrapper>
  );
};

export default WorkModal;
