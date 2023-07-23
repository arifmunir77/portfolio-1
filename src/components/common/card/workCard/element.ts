import styled from "styled-components";

export const WorkFlex = styled.div`
  margin-top: 2rem;
  position: relative;

  img {
    height: 400px;
    width: 100%;
    transition: all 0.3s;

    @media (max-width: 991.98px) {
      height: auto;
      width: auto;
    }

    &:hover {
      transform: scale(1.25, 1.23);
      transition: all 0.3s;

      @media (max-width: 991.98px) {
        transform: none;
      }
    }
  }
`;

export const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: hidden;
  transition: all 0.3s ease-in-out;

  ${WorkFlex}:hover & {
    visibility: visible;
  }

  p {
    font-size: 24px;
    font-weight: 400;
  }
`;
