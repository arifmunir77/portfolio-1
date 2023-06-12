import styled from "styled-components";

export const WorkWrapper = styled.div`
  overflow: hidden;
  background-color: rgb(18, 18, 18);

  .workContainer {
    margin-top: 8rem;
    margin-bottom: 8rem;

    @media (max-width: 991.98px) {
      margin-top: 4rem;
      margin-bottom: 4rem;
    }
  }

  .main-col {
    flex: 1;
    transition: 0.3s ease-in-out all;
    padding: 0;
    margin: 0;

    &:hover {
      flex: 1.5;
      transition: 0.3s ease-in-out all;

      @media (max-width: 991.98px) {
        flex: 1;
      }
    }
  }

  .flex {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 20%;
    gap: 10px;
  }
`;

export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 991.98px) {
    flex-direction: column;
  }
`;

export const WorkHeading = styled.h1`
  font-family: "Teko";
  color: #fff;
  font-size: 80px;
  margin-bottom: 0;
  @media (max-width: 991.98px) {
    text-align: center;
  }
`;

export const BorderDiv = styled.div`
  width: 50%;
  border-top: 2px solid #66fcf1;
  @media (max-width: 991.98px) {
    border: none;
  }
`;

export const WorkText = styled.p`
  color: #66fcf1;
  @media (max-width: 991.98px) {
    margin-top: 1rem;
    text-align: center;
  }
`;

export const WorkButton = styled.button`
  padding: 20px 30px;
  border: 2px solid #66fcf1;
  background: transparent;
  color: #fff;
`;
