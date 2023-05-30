import React, { useState } from "react";
import { Button, Modal } from "antd";
import { ModalWrapper, WorkModalContainer } from "./element";
import { BsArrowRight } from "react-icons/bs";

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
        <WorkModalContainer>sddsds</WorkModalContainer>
      </Modal>
    </ModalWrapper>
  );
};

export default WorkModal;
