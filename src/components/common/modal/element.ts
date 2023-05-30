import styled from "styled-components";

export const ModalWrapper = styled.div`
  button.ant-btn.css-dev-only-do-not-override-w8mnev.ant-btn-primary {
    background: transparent;
    border: none;
    box-shadow: none;
    color: #66fcf1;
    margin-top: 2rem;

    &:focus {
      box-shadow: none !important;
    }
  }
  .arrow-icon {
    margin-left: 5px;
  }

  .ant-modal > .ant-modal-content {
  }
`;

export const WorkModalContainer = styled.div`
  background-color: #121212;
  min-height: 500px;
  box-shadow: 0 0 20px 10px rgba(102, 252, 241, 0.8);
`;
