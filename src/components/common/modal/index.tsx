import React, { useState } from "react";
import { Button, Modal } from "antd";
import { ModalWrapper } from "./element";
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
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p className="bb">Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </ModalWrapper>
  );
};

export default WorkModal;
