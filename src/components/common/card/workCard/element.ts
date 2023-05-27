import styled from "styled-components";

export const WorkFlex = styled.div`
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
